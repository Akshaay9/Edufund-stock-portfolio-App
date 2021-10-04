import { Button, TextField } from "@material-ui/core";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./profile.css";
import { formatDate } from "../../utils/dateFormat";
import {
  checkForProfileData,
  emailError,
  emailValidator,
  firstNameError,
  firstNameVlidator,
  genderValidator,
  lastNameError,
  lastNameValidator,
} from "../../utils/auth";
import { fieldsUpdated } from "../../utils/filedsUpdated";
import { toast } from "react-toastify";
import { updateData } from "../../features/auth/AuthSlice";

function UserData() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.User);
  const [firstName, setFirstName] = useState(user?.firstName || "");
  const [lastName, setLastName] = useState(user?.lastName || "");
  const [gender, setGender] = useState(user?.gender || "");
  const [dob, setDOb] = useState(user?.dob || "");
  const [email, setEmail] = useState(user?.email || "");
  const [showError, setShowError] = useState(false);

  const formSubmit = () => {
    if (showError) {
      setShowError((ele) => false);
    }
    if (checkForProfileData(firstName, lastName, gender, dob, email)) {
      if (
        fieldsUpdated({ firstName, lastName, gender, dob, email }, user)
      ) {
        dispatch(
          updateData({
            id: user.id,
            firstName,
            lastName,
            gender,
            dob,
            email,
          })
        );
        toast.success("successfully updated");
        return;
      } else {
        toast.warning("please update any field to continue");
        return;
      }
    } else {
      setShowError((ele) => true);
    }
  };

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
            <Button
              variant="contained"
              color="primary"
              onClick={() => formSubmit()}
            >
              Save Changes
            </Button>
          </div>
        </div>
      </form>
    </>
  );
}

export default UserData;
