import React, { useState } from "react";
import "./Signin.css";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };
  console.log(showPassword);

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {})
      .catch((err) => {
        setError(err.message);
      });
  };

  const login = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {})
      .catch((err) => {
        setError(err.message);
      });
  };
  return (
    <div className="signin">
      <form>
        <h1>Log in</h1>
        {error && (
          <div className="error">
            <p>{error}</p>
          </div>
        )}
        <input
          value={email}
          className="email"
          type="email"
          placeholder="Email"
          onChange={(e) => {
            setEmail(() => e.target.value);
          }}
        />
        <div className="password-container">
          <input
            className="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            onChange={(e) => {
              setPassword(() => e.target.value);
            }}
          />
          <span className="show" onClick={togglePassword}>
            {showPassword ? "Hide" : "Show"}
          </span>
        </div>
        <button onClick={login}>Log in</button>
        <h3>
          <span className="signupContent">New to Netflix? </span>
          <span className="signupLink" onClick={register}>
            Create an account
          </span>
          <p className="captchaContent">
            This page is protected by Google reCAPTCHA to <br />
            ensure you're not a bot <span className="captcha">Learn More</span>
          </p>
        </h3>
      </form>
    </div>
  );
};

export default Signin;
