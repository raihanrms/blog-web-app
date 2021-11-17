
import Mainheader from "../../components/header/Mainheader"
import Posts from "../../components/posts/Posts"
import Sidebar from "../../components/sidebar/Sidebar"
import "./home.css"

export default function Mainhome() {
    return (
        <>
        <Mainheader/>
        <div className="home">
            <Posts/>
            <Sidebar/>
        </div>
        </>
    )
}
