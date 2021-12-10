import {Routes as MyRoutes, Route} from "react-router-dom";
import LoginUi from "../components/login.ui/LoginUi";
import Signup from "../components/signup.ui/Signup";
import Home from "../components/home/Home";
const Routes= ()  =>  {   
    return (
        <MyRoutes>
          <Route path="/" element={<LoginUi />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Home" element={<Home />} />

        </MyRoutes>
    );
  }

  export default Routes;