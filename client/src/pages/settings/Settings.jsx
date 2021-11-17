import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"

export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Account</span>
                <span className="settingsDeleteTitle">Delete Account</span>
            </div>

            <form className="settingsForm">
                <label>Profile Picture</label>
                <div className="settingsPP">
                    <img src="https://expertphotography.b-cdn.net/wp-content/uploads/2018/11/blurred-background-portrait-1.jpg "
                    alt=""
                    />
                    <label htmlFor="fileInput">
                        <i className="settingsPPIcon fal fa-user"></i>
                    </label>
                <input type="file" id="fileInput" style={{display:"none"}}/>
                </div>
                <label>Username</label>
                <input type="text" placeholder="Jim"/>
                <label>Email</label>
                <input type="email" placeholder="Jim45@gmail.com"/>
                <label>Password</label>
                <input type="password"/>
                <button className="settingsSubmit">Update</button>
                </form>
                </div>
            <Sidebar/>
        </div>
    )
}
