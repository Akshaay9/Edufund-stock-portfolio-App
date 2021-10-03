import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { Link } from "react-router-dom";
import {
  authValidator,
  checkErrorForLogin,
  emailError,
  emailValidator,
  passowrdValidator,
} from "../../utils/auth";
import "./app.css";
import { toast } from "react-toastify";
import { checkForLogin } from "../../utils/authorization";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../features/auth/AuthSlice";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { state } = useLocation();
  const { userData, guestUser } = useSelector((state) => state.User);

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
      const [user, isAuthenticated] = checkForLogin(email, pass, userData);
      if (isAuthenticated) {
        dispatch(logIn(user));
        toast.success("logging you in");
        navigate("/");
      }
    } else {
      setShowError((ele) => true);
    }
    return;
  };

  const guestUserLogin = () => {
    dispatch(logIn(guestUser));
    toast.success("logging you in");
    navigate("/");
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
                  value={email}
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
                value={pass}
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
            <Button
              variant="contained"
              color="primary"
              onClick={() => guestUserLogin()}
            >
              Login as guest
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
