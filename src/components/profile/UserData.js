import { Button, TextField } from "@material-ui/core";

import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./profile.css";
import { formatDate } from "../../utils/dateFormat";
import {
  emailError,
  emailValidator,
  firstNameError,
  firstNameVlidator,
  genderValidator,
  lastNameError,
  lastNameValidator,
} from "../../utils/auth";

function UserData() {
  const { guestUser } = useSelector((state) => state.User);
  const [firstName, setFirstName] = useState(guestUser?.firstName || "");
  const [lastName, setLastName] = useState(guestUser?.lastName || "");
  const [gender, setGender] = useState(guestUser?.gender || "");
  const [dob, setDOb] = useState(guestUser?.dob || "");
  const [email, setEmail] = useState(guestUser?.email || "");
  const [showError, setShowError] = useState(false);
  console.log(formatDate(dob));

  return (
    <>
      {" "}
      <form action="">
        <div className="profile-container">
          <div>
            <TextField
              error={showError && firstNameVlidator(firstName)}
              required={true}
              type="email"
              id="outlined-basic"
              value={firstName}
              onChange={(e) => setFirstName((ele) => e.target.value)}
              label={showError ? firstNameError(firstName) : "first name"}
            />
          </div>
          <div>
            <TextField
              required={true}
              type="email"
              value={lastName}
              error={showError && lastNameValidator(lastName)}
              onChange={(e) => setLastName((ele) => e.target.value)}
              id="outlined-basic"
              label={showError ? lastNameError(lastName) : "last name"}
            />
          </div>
          <div>
            <TextField
              required={true}
              error={showError && (email.length === 0 || emailValidator(email))}
              type=""
              value={email}
              label={showError ? emailError(email) : "email"}
              id="outlined-basic"
              onChange={(e) => setEmail((ele) => e.target.value)}
            />
          </div>
          <div>
            {/*  */}
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
              <option selected={gender === "default"} value="default">
                select gender
              </option>
              <option selected={gender === "male"} value="male">
                Male
              </option>
              <option selected={gender === "female"} value="female">
                Female
              </option>
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
              type="date"
              id="outlined-basic"
              value={formatDate(dob)}
              onChange={(e) => {
                setDOb(e.target.value);
              }}
            />
          </div>
          <div className="btn">
            <Button variant="contained" color="primary">
              Save Changes
            </Button>
          </div>
        </div>
      </form>
    </>
  );
}

export default UserData;
