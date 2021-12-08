import {Routes as MyRoutes, Route } from "react-router-dom";
import LoginUi from "../components/login.ui/LoginUi";
import Signup from "../components/signup.ui/Signup";

const Routes= ()  =>  {
    return (
        <MyRoutes>
          <Route path="/" element={<LoginUi />} />
          <Route path="/Signup" element={<Signup />} />
        </MyRoutes>
    );
  }

  export default Routes;