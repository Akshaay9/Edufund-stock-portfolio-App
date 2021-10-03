import { Button, Link, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import {
  authValidator,
  checkFormErrorSignUp,
  emailError,
  emailValidator,
  firstNameError,
  firstNameVlidator,
  genderValidator,
  lastNameError,
  lastNameValidator,
  passowrdValidator,
} from "../../utils/auth";
import "./app.css";
import { useDispatch, useSelector } from "react-redux";
import { checkForLogin, checkSignUp } from "../../utils/authorization";
import { logIn } from "../../features/auth/AuthSlice";
import { toast } from "react-toastify";

function SignUp() {
  const navigate = useNavigate();
  const signupModalContainer = (e) => {
    if (e.target.classList.contains("login-sign-container")) {
      navigate("/landing");
    }
  };
  const { userData, guestUser, user } = useSelector((state) => state.User);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDOb] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [showError, setShowError] = useState(false);
  const dispatch = useDispatch();

  const formSubmit = (e) => {
    e.preventDefault();
    if (showError === true) {
      setShowError((ele) => false);
    }

    if (checkFormErrorSignUp(firstName, lastName, gender, dob, email, pass)) {
      if (checkSignUp(email, userData, user)) {
        toast.error("user alredy exists, please log in ");
        return;
      } else {
        dispatch(
          logIn({
            id: userData.length + 1,
            firstName,
            lastName,
            gender,
            dob,
            email,
            pass,
          })
        );
      }
      toast.success("logging you in");
      navigate("/");
      return;
    } else {
      setShowError((ele) => true);
      return;
    }
  };

  const guestUserLogin = () => {
    console.log("m");
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
          <h1>Create your account</h1>
          <p>
            Alredy have an account?{" "}
            <Link to="/landing/login">
              <span style={{ color: "black", textDecoration: "underline" }}>
                signup here
              </span>{" "}
            </Link>{" "}
          </p>
          <form action="">
            <div className="inputs">
              <div className="same-line">
                <TextField
                  error={showError && firstNameVlidator(firstName)}
                  required={true}
                  type="email"
                  id="outlined-basic"
                  value={firstName}
                  onChange={(e) => setFirstName((ele) => e.target.value)}
                  label={showError ? firstNameError(firstName) : "first name"}
                />
                <TextField
                  required={true}
                  type="email"
                  error={showError && lastNameValidator(lastName)}
                  onChange={(e) => setLastName((ele) => e.target.value)}
                  id="outlined-basic"
                  label={showError ? lastNameError(lastName) : "last name"}
                />
              </div>
              <div>
                <select
                  id="cars"
                  name="cars"
                  aria-label="gender"
                  placeholder="gender"
                  required={true}
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                >
                  <option value="default">select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              {showError &&
                (genderValidator(gender) ? (
                  <span className="error fail">required</span>
                ) : (
                  <span className="error success">success</span>
                ))}
              <div>
                <TextField
                  error={showError && dob === ""}
                  required={true}
                  type="date"
                  id="outlined-basic"
                  onChange={(e) => {
                    setDOb(e.target.value);
                  }}
                />
              </div>

              <div>
                <TextField
                  required={true}
                  error={
                    showError && (email.length === 0 || emailValidator(email))
                  }
                  onChange={(e) => setEmail((ele) => e.target.value)}
                  type="email"
                  id="outlined-basic"
                  label={showError ? emailError(email) : "email"}
                />
              </div>

              <TextField
                required={true}
                onChange={(e) => setPass((ele) => e.target.value)}
                type="email"
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
                Sign-up
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

export default SignUp;
