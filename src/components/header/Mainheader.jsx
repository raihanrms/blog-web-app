import "./header.css"

export default function Mainheader() {
    return (
        <div className="header">
             <div className="headerTitles">
                 <span className="headerTitleSm">Create Your</span>
                 <span className="headerTitleLg">Blog</span>
             </div>   
            <img
            className="headerImg"
            src="https://www.nawpic.com/media/2020/nature-background-nawpic-10.jpg"         
            alt=""
            />
        </div>
    );
}
