import { signOut } from "firebase/auth";
import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../../Components/Navbar/Navbar";
import { selectUser } from "../../features/userSlice";
import { auth } from "../../firebase";
import "./Profile.css";

const Profile = () => {
  const user = useSelector(selectUser);
  const logout = () => {
    signOut(auth);
  };
  return (
    <div className="profile">
      <Navbar />
      <div className="profileBody">
        <h1>Edit Profile</h1>
        <div className="profileInfo">
          <img
            className=""
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="user"
          />

          <div className="profileDetails">
            <h2>{user.email}</h2>
            <div className="profilePlans">
              <h1>Plans</h1>
              <button onClick={logout}>Log out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
