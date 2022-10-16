import React, { useState } from "react";
import "./Login.css";
import Signin from "../Signin/Signin";

const Login = () => {
  const [signin, setSignin] = useState(false);

  return (
    <div className="login">
      <div className="gradient-bg">
        <div className="login_items">
          <img
            className="loginLogo"
            src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
            alt="Netflix Logo"
          />
          <button
            className="signinBtn"
            onClick={() => {
              setSignin(true);
            }}
          >
            Sign In
          </button>
        </div>

        <div className="loginBody">
          {signin ? (
            <Signin />
          ) : (
            <>
              <h1>
                Unlimited movies, TV <br />
                shows and more.
              </h1>
              <h3>Watch anywhere. Cancel anytime.</h3>
              <h4>
                Ready to watch? Enter your email to create or restart your
                membership.
              </h4>
              <form className="signinForm">
                <input type="email" placeholder="Email Address" />
                <button
                  onClick={() => {
                    setSignin(true);
                  }}
                >
                  Get Started
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
