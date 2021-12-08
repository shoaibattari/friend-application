import React from 'react'
// import { Link } from 'react-router-dom';
import '../signup.ui/Signup.css'
import profile from "./../image/a.png";
import email from "./../image/email.jpg";
import pass from "./../image/pass.png";


function Signup() {
  return (
    <div>
      {/* <Link to="/signup">signup</Link> */}
      <div className="main">
        <div className="sub-main">
          <div>
            <div className="imgs">
              <div className="container-image">
                <img src={profile} alt="profile" className="profile" />

              </div>


            </div>
            <div>
              <h1>Sign up Page</h1>
              <div>
                <img src={email} alt="email" className="email" />
                <input type="text" placeholder="user name" className="name" />
              </div>
              <div className="second-input">
                <img src={pass} alt="pass" className="email" />
                <input type="password" placeholder="user name" className="name" />
              </div>
              <div className="login-button">
                <button>Login</button>
              </div>

              <p className="link">
                <a href="#">Forgot password ?</a> Or<a href="#">Sign Up</a>
              </p>


            </div>
          </div>


        </div>
      </div>
  </div>      
);

}

      export default Signup;
