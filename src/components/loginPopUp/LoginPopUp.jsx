import { useState } from "react";
import "./LoginPopUp.css";
import { assets } from "../../assets/assets";

const LoginPopUp = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");
  return (
    <>
      <div className="login-popup">
        <form className="login-popup-container">
          <div className="login-popup-title">
            <h2>{currState}</h2>
            <img
              src={assets.cross_icon}
              onClick={() => setShowLogin(false)}
              alt=""
            />
          </div>
          <div className="login-popup-inputs">
            {currState === "Login" ? (
              <></>
            ) : (
              <input type="text" placeholder="Your Name" required />
            )}

            <input type="email" placeholder="Your Email" required />
            <input type="password" placeholder="Password" required />
          </div>
          <button>{currState === "Login" ? "Login" : "Sign Up"}</button>
          <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By continuing, i agree to the terms of use & privacy policy</p>
          </div>
          {currState === "Login" ? (
            <p>
              Create a new account?&nbsp;&nbsp;
              <span onClick={() => setCurrState("Sign up")}>click here</span>
            </p>
          ) : (
            <p>
              already have an account?&nbsp;&nbsp;
              <span onClick={() => setCurrState("Login")}>login here</span>
            </p>
          )}
        </form>
      </div>
    </>
  );
};

export default LoginPopUp;
