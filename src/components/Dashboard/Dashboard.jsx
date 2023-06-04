import "./dashboard.css";
import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AuthContext from "./../../store/auth-context";
import Trimmer from "./../Trimmer/Trimmer";

export default function Dashboard() {
  const params = useParams();
  // const userId = params.userId;
  const authCtx = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
    authCtx.logout();
  };

  return (
    <div className="dashboard">
      <div className="header">
        <h1 className="logo">Scissor</h1>
        <button className="btn" onClick={handleLogout}>
          logout
        </button>
      </div>
      <Trimmer />
    </div>
  );
}
