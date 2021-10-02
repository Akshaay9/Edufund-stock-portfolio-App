import { Button, TextField } from "@material-ui/core";
import React from "react";
import "./profile.css";

function UserData() {
  return (
    <>
      {" "}
      <form action="">
        <div className="profile-container">
          <div>
            <TextField
              required={true}
              type=""
              error={false}
              id="outlined-basic"
              label="First Name"
            />
          </div>
          <div>
            <TextField
              required={true}
              type=""
              error={false}
              id="outlined-basic"
              label="Lasr Name"
            />
          </div>
          <div>
            <TextField
              required={true}
              type=""
              error={false}
              id="outlined-basic"
              label="Email"
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
            >
              <option value="default">select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div>
            <TextField type="date" error={false} id="outlined-basic" />
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
