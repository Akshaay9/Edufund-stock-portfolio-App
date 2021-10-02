import React, { useState } from "react";
import UserCredentials from "../../components/profile/UserCredentials";
import UserData from "../../components/profile/UserData";
import "./profile.css";

function Profile() {
  const [profile, setProfile] = useState("profile");

  return (
    <>
      <div className="user">
        <h4
          style={
            profile === "profile" ? { borderBottom: "2px solid blue" } : {}
          }
          onClick={() => setProfile((ele) => "profile")}
        >
          Profile
        </h4>
        <h4
          style={
            profile === "credential" ? { borderBottom: "2px solid blue" } : {}
          }
          onClick={() => setProfile((ele) => "credential")}
        >
          Credentails
        </h4>
      </div>
      {profile === "profile" ? <UserData /> : <UserCredentials />}
    </>
  );
}

export default Profile;
