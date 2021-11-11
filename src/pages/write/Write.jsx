import "./write.css"

export default function Write() {
    return (
        <div className="write">
            <img 
            className="writeImg"
            src="https://c4.wallpaperflare.com/wallpaper/711/679/625/sea-beach-summer-the-sky-wallpaper-preview.jpg" alt=""/>
         <form className="writeForm" >
             <div className="writeFormGroup">
                 <label htmlFor="fileInput">
                 <i className="writeIcon fas fa-plus"></i>
                 </label>
                 <input type="file" id="fileInput" style={{display: "none"}}/>
                 <input type="text" placeholder="Title" className="writeInput"autofocus={true}/>

             </div>
             <div className="writeFormGroup">
                 <textarea placeholder="Tell your story..."
                 type="text"
                 className="writeInput writeText">

                 </textarea>
                 <button className="writeSubmit">Publish</button>
             </div>
             </form>  
        </div>
    )
}
