import "./post.css"

export default function Mainpost() {
    return (
        <div className="post">
        <img
            className="postImg" 
            src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F614d55107441e2d9ba4238f6%2FThe-7-Biggest-Artificial-Intelligence--AI--Trends-In-2022%2F960x0.jpg%3Ffit%3Dscale " alt=""/>
           
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">
                Lorem, ipsum dolor sit amet .
            </span>
            <hr/>
            <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta molestiae blanditiis commodi,
             sint praesentium, voluptatum perferendis inventore veritatis ducimus consequuntur harum sapiente
              laudantium! Veniam harum maiores praesentium?</p>
        </div>
    )
}
