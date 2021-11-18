const mongoose = require("mongoose")

const CategorySchema = new mongoose.Schema(
  {
    name:{
        type:String,
        required:true,
    },
  },
    { timestamps: true }
);

// export this schema
module.exports = mongoose.model("Category", CategorySchema);