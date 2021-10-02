import { Button, TextField } from "@material-ui/core";
import React from "react";

function UserCredentials() {
  return (
    <>
      <form action="">
        <div className="profile-container">
          <div>
            <TextField
              required={true}
              type=""
              error={false}
              id="outlined-basic"
              label="password"
            />
          </div>
          <div>
            <TextField
              required={true}
              type=""
              error={false}
              id="outlined-basic"
              label="confirm password"
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
