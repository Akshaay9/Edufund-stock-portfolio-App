
import React from "react";
import { Link } from "react-router-dom";
import SignUp from "../../components/auth/SignUp";
import Login from "../../components/auth/Login";
import "./landing.css";
import { useLocation } from "react-router-dom";

function Landing() {
  const location = useLocation();
  return (
    <>
      {location.pathname.includes("login") && <Login />}
      {location.pathname.includes("signup") && <SignUp />}

      <div className="landing-bg ">
        <div className="landing-bg-logo ">
          <h2>
            <span style={{ color: "#4f46e5" }}>fund.</span>tech
          </h2>
        </div>

        <div className="landing-bg-container ">
          <div className="landing-bg-subtitle ">
            <span></span>
            <h4> Akshay</h4>
          </div>
          <div className="landing-bg-maintitle">
            <h1>
              Application to track your favourite
              <span style={{ color: "#4f46e5" }}> mutual funds.</span>
            </h1>
          </div>

          <div className="landing-bg-points">
            <ul>
              <li>start tracking your favourite mutual funds</li>
              <li>Detailed explaination of net asset value with graphs</li>
              <li>Update your profile seamlessly</li>
              <li>Grow your financial assets</li>
            </ul>
          </div>

          <Link to="/landing/signup">
            {" "}
            <button className="landing-bg-signup">Sign Up</button>
          </Link>
          <Link to="/landing/login">
            {" "}
            <button className="landing-bg-login">Login</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Landing;
