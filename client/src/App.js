import Mainhome from "./pages/home/Mainhome";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import SinglePost from "./components/singlePost/SinglePost";

function App() {
  // sudo user as we are still in development
  const user = false;
  return (
   <Router>
    <TopBar />
      <Switch>
        <Route exact path="/">
          <Mainhome />
        </Route>
        {/* if user is already registered, redirect to home page */}
        <Route path="/register">{user ? <Mainhome/> : <Register />}</Route>
        <Route path="/login">{user ? <Mainhome/> : <Login />}</Route>
        <Route path="/write">{user ? <Write/> : <Register />}</Route>
        <Route path="/settings">{user ? <Settings/> : <Register />}</Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
      </Switch>
    </Router>
  );
} 

export default App;
