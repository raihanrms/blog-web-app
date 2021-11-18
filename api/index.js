// express server
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require("multer");

dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    // this create index was not working
    //useCreateIndex: true,
})
.then(console.log("Connected to MongoDB"))
.catch(err=>console.log(err));

// images will be stored on our disk
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images");
    },
    filename: (req, file, cb) => {
        // this is for testing
        // cb(null, "test.jpg");
        // this is to send images to our client project
        cb(null, req.body.name);
    },
});

// how to upload
const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) =>{
    res.status(200).json("File has been uploaded");
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

// to use it, using this port
app.listen("5000", ()=>{
    console.log("Backend is running.");
});
