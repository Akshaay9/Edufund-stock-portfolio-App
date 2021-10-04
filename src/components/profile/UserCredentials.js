import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { updateData } from "../../features/auth/AuthSlice";
import { authValidator, passowrdValidator } from "../../utils/auth";
import { checkForPass } from "../../utils/auth";
import { fieldsUpdated } from "../../utils/filedsUpdated";

function UserCredentials() {
  const { user } = useSelector((state) => state.User);
  const [pass, setPass] = useState(user.pass);
  const [confirmPass, setConfirmPass] = useState("");
  const [showError, setShowError] = useState(false);
  const dispatch = useDispatch();

  const submit = () => {
    if (showError) {
      setShowError((ele) => false);
    }
    if (checkForPass(confirmPass) && checkForPass(pass)) {
      if (fieldsUpdated({ pass: confirmPass }, { pass: user.pass })) {
        dispatch(updateData({ id: user.id, pass: confirmPass }));
        toast.success("password updated");
        setPass((ele) => confirmPass);
      } else {
        toast.warning("please update the password");
      }
    } else {
      setShowError((ele) => true);
    }
  };
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
              error={
                showError &&
                (confirmPass === "" || passowrdValidator(confirmPass))
              }
              value={confirmPass}
              onChange={(e) => setConfirmPass((ele) => e.target.value)}
              required={true}
              type=""
              id="outlined-basic"
              label={showError ? authValidator(confirmPass) : "password"}
            />
          </div>
          <div className="btn">
            <Button
              variant="contained"
              color="primary"
              onClick={() => submit()}
            >
              Save Changes
            </Button>
          </div>
        </div>
      </form>
    </>
  );
}

export default UserCredentials;
