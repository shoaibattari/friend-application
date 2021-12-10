import React from 'react'
import { Link } from 'react-router-dom';
import { Route } from 'react-router';
import './LoginUi.css';
import profile from "./../image/a.png";
import email from "./../image/email.jpg";
import pass from "./../image/pass.png";

function LoginUi() {
  return (
    <div>

      <div className="main">
        <div className="sub-main">
          <div>
            <div className="imgs">
              <div className="container-image">
                <img src={profile} alt="profile" className="profile" />

              </div>


            </div>
            <div>
              <h1>Login Page</h1>
              <div>
                <img src={email} alt="email" className="email" />
                <input type="email" placeholder="user name" className="name" />
              </div>
              <div className="second-input">
                <img src={pass} alt="pass" className="email" />
                <input type="password" placeholder="password" className="name" />
              </div>
              <div className="login-button">
                <button>Login</button>
                {<br />}
                {<br />}
              </div>
              <div>
                <button>
                  <Link to="/Signup">Signup</Link>
                </button>
                {/* <button>SignUp</button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default LoginUi;
