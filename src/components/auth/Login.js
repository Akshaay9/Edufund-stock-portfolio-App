import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import {
  authValidator,
  checkErrorForLogin,
  emailError,
  emailValidator,
  passowrdValidator,
} from "../../utils/auth";
import "./app.css";

function Login() {
  const navigate = useNavigate();
  const signupModalContainer = (e) => {
    if (e.target.classList.contains("login-sign-container")) {
      navigate("/landing");
    }
  };
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [showError, setShowError] = useState(false);

  const formSubmit = (e) => {
    e.preventDefault();
    if (showError === true) {
      setShowError((ele) => false);
    }

    if (checkErrorForLogin(email, pass)) {
      return;
    } else {
      setShowError((ele) => true);
    }
    return;
  };

  return (
    <>
      <div
        className="login-sign-container"
        onClick={(e) => signupModalContainer(e)}
      >
        <div className="logn-container">
          <h1>Login to your account</h1>
          <p>
            dont have an account?{" "}
            <Link to="/landing/signup">
              <span style={{ color: "black", textDecoration: "underline" }}>
                signup here
              </span>{" "}
            </Link>{" "}
          </p>
          <form action="">
            <div className="inputs">
              <div>
                <TextField
                  required={true}
                  type="email"
                  onChange={(e) => setEmail((ele) => e.target.value)}
                  error={
                    showError && (email.length === 0 || emailValidator(email))
                  }
                  id="outlined-basic"
                  label={showError ? emailError(email) : "email"}
                />
              </div>

              <TextField
                required={true}
                onChange={(e) => setPass((ele) => e.target.value)}
                type=""
                error={showError && (pass === "" || passowrdValidator(pass))}
                id="outlined-basic"
                label={showError ? authValidator(pass) : "password"}
              />
            </div>
            <div className="btn">
              <Button
                variant="contained"
                color="primary"
                onClick={(e) => formSubmit(e)}
              >
                Log-in
              </Button>
            </div>
          </form>
          <p>or</p>
          <div className="btn">
            <Button variant="contained" color="primary">
              Login as guest
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
