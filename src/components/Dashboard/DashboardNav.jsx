import classes from "./dashboardNav.module.css";
import React, { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AuthContext from "./../../store/auth-context";
import UseAuth from "../Authentication/UseAuth";
import { signOut } from "firebase/auth";
import { auth } from "../Authentication/Firebase/firebase";

const DashboardNav = ({user}) => {
  const [dropIsActive, setDropIsActive] = useState(false);
  //   const [isHover, setIsHover] = useState(false);
  //   const handleHover = () => {
  //     setIsHover(!isHover);
  //   };

  const params = useParams();
  //   const userId = params.userId;
  const authCtx = useContext(AuthContext);
  let username = authCtx.username;
  const navigate = useNavigate();


  // const currentUser = UseAuth();
  // console.log(currentUser.name);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("log out successful");
      navigate("/login");
      authCtx.logout();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className={classes.dashboard}>
        <div className={classes.dash_nav}>
          <h1 className={classes.logo}>SCISSOR</h1>
          <div className={classes.dropdown}>
            <p className={classes.drop_btn}>
              {/* {user.displayName}  */} name
            </p>
              <div className="user_img">
                <img src="" />
              </div>
            {/* <div className={classes.drop_content}>
              <button className={classes.button} onClick={handleLogout}>
                logout
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardNav;
