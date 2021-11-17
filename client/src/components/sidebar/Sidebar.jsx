import "./sidebar.css"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img src=" https://cdphtu.edu.np/img/course_img_default.jpg" alt=""/>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Assumenda excepturi dolore distinctio
                 ipsum tempore itaque eaque ea, aspernatur ut.
            </p>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">CATAGORIES</span>
            <ul className="sidebarList">
               <li className="sidebarListItem">Life</li>
               <li className="sidebarListItem">Music</li>
               <li className="sidebarListItem">Sport</li>
               <li className="sidebarListItem">Style</li>
               <li className="sidebarListItem">Tech</li>
               <li className="sidebarListItem">Movies</li>


            </ul>
        </div> 
         <div className="sidebarItem">
         <span className="sidebarTitle">FOLLOW US</span>
         <div className="sidebarSocial">
            <i className="sidebarIcon fab fa-facebook-square"></i>
            <i className="sidebarIcon fab fa-twitter-square"></i>
            <i className="sidebarIcon fab fa-pinterest-square"></i>
            <i className="sidebarIcon fab fa-instagram-square"></i>
         </div>
         </div>


        </div>

        
  );
}
