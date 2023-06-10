import "./dashboard.css";
import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AuthContext from "./../../store/auth-context";
import Trimmer from "./../Trimmer/Trimmer";
import UseAuth from "../Authentication/UseAuth";
import { signOut } from "firebase/auth";
import { auth } from "../Authentication/Firebase/firebase";

export default function Dashboard() {
  const params = useParams();
  // const userId = params.userId;
  const authCtx = useContext(AuthContext);
  let username = authCtx.username;
  const navigate = useNavigate();

  const currentUser = UseAuth();
  console.log(currentUser);

  const handleLogout = async() => {
    try {
      await signOut(auth)
      alert('log out successful')
      navigate("/login");
      authCtx.logout();
    } catch (err) {
      console.log(err)
    }
  };

  return (
    <div className="dashboard">
      <div className="header">
        <h1 className="logo">Scissor</h1>
        <p>{currentUser ? currentUser.displayName : "someone"}</p>
        <button className="btn" onClick={handleLogout}>
          logout
        </button>
      </div>
      <Trimmer />
    </div>
  );
}
