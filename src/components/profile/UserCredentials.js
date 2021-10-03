import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { authValidator, passowrdValidator } from "../../utils/auth";

function UserCredentials() {
  const { guestUser } = useSelector((state) => state.User);
  const [pass, setPass] = useState(guestUser?.pass || "");
  const [confirmPass, setConfirmPass] = useState("");
  const [showError, setShowError] = useState(true);
  return (
    <>
      <form action="">
        <div className="profile-container">
          <div>
            <TextField
              error={showError && (pass === "" || passowrdValidator(pass))}
              value={pass}
              required={true}
              onChange={(e) => setPass((ele) => e.target.value)}
              type=""
              id="outlined-basic"
              label={showError ? authValidator(pass) : "password"}
            />
          </div>
          <div>
            <TextField
              error={showError && (confirmPass === "" || passowrdValidator(confirmPass))}
              value={confirmPass}
              onChange={(e) => setConfirmPass((ele) => e.target.value)}
              required={true}
              type=""
              id="outlined-basic"
              label={showError ? authValidator(confirmPass) : "password"}
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

export default UserCredentials;
