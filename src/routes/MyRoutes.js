import {Routes as MyRoutes, Route } from "react-router-dom";
import Loginpage from "../components/Loginpage";
import Signuppage from "../components/Signuppage";



const Routes= ()  =>  {
    return (
        <MyRoutes>
          <Route path="/" element={<Loginpage />} />
          <Route path="/Signup" element={<Signuppage />} />
        </MyRoutes>
    );
  }

  export default Routes;