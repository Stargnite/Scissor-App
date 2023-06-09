import { createContext, useState, useEffect, useCallback } from "react";

let logoutTimer;

const AuthContext = createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

// const calculateRemainingTime = (expirationTime) => {
//   const currentTime = new Date().getTime();
//   const adjExpirationTime = new Date(expirationTime).getTime();

//   const remainingDuration = adjExpirationTime - currentTime;

//   return remainingDuration;
// };

// const retrieveStoredToken = () => {
  // const storedToken = localStorage.getItem("token");
  // const storedExpirationDate = localStorage.getItem("expirationTime");

  // const remainingTime = calculateRemainingTime(storedExpirationDate);

  // if (remainingTime <= 60000) {
  //   localStorage.removeItem("token");
  //   localStorage.removeItem("expirationTime");
  //   return null;
  // }

  // return {
    // token: storedToken,
    // duration: remainingTime,
  // };
// };

export const AuthContextProvider = ({ children }) => {
  // const tokenData = retrieveStoredToken();
  // let initialToken;
  // if (tokenData) {
  //   initialToken = tokenData.token;
  // }

  const [token, setToken] = useState('');
  let [userIsLoggedIn, setUserIsLoggedIn] = useState(false);

  const logoutHandler = useCallback(() => {
    setToken('');
    setUserIsLoggedIn(false)
    localStorage.removeItem("expirationTime");

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  const loginHandler = (token) => {
    setToken(token);
    if(token) {
      setUserIsLoggedIn(true)
    }
    localStorage.setItem("token", token);
    
  };

  // useEffect(() => {
  //   if (tokenData) {
  //     logoutTimer = setTimeout(logoutHandler, tokenData.duration);
  //   }
  // }, [tokenData, logoutHandler]);

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
