import "./singlePost.css"

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src="https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171__480.jpg" alt=""
                 className="singlePostImg"/>

            <h1 className="singlePostTitle">
                Lorem ipsum dolor sit amet.
                <div className="singlePostEdit">
                <i className="singlePostIcon far fa-edit"></i>
                <i className="singlePostIcon far fa-trash-alt"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">
                    Author: <b> Jim </b>
                    </span>
                <span className="singlePostDate"> ;1 hour ago  </span>

                <p className="singlePostDesc">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, 
                    dolorem corporis error atque architecto et illum quos magni 
                    aspernatur culpa, iure dolores
                    unde praesentium hic incidunt nihil adipisci accusantium?
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, 
                    dolorem corporis error atque architecto et illum quos magni 
                    aspernatur culpa, iure dolores
                    unde praesentium hic incidunt nihil adipisci accusantium?
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, 
                    dolorem corporis error atque architecto et illum quos magni 
                    aspernatur culpa, iure dolores
                    unde praesentium hic incidunt nihil adipisci accusantium?
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, 
                    dolorem corporis error atque architecto et illum quos magni 
                    aspernatur culpa, iure dolores
                    unde praesentium hic incidunt nihil adipisci accusantium?
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, 
                    dolorem corporis error atque architecto et illum quos magni 
                    aspernatur culpa, iure dolores
                    unde praesentium hic incidunt nihil adipisci accusantium?
                </p>
            </div>
            </div>
        </div>
    )
}
