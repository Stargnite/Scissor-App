import { createContext, useState, useEffect, useCallback } from "react";

let logoutTimer;

const AuthContext = createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
  userCredentials: {}
});

const calculateRemainingTime = (expirationTime) => {
  const currentTime = new Date().getTime();
  const adjExpirationTime = new Date(expirationTime).getTime();

  const remainingDuration = adjExpirationTime - currentTime;

  return remainingDuration;
};

const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem("token");
  const storedExpirationDate = localStorage.getItem("expirationTime");

  const remainingTime = calculateRemainingTime(storedExpirationDate);

  if (remainingTime <= 60000) {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    return null;
  }

  return {
    token: storedToken,
    duration: remainingTime,
  };
};

export const AuthContextProvider = ({ children }) => {
  const tokenData = retrieveStoredToken();
  let initialToken;
  if (tokenData) {
    initialToken = tokenData.token;
  }
  
  const [token, setToken] = useState(initialToken);
  // const[userIsLoggedIn, setUserIsLoggedIn] = useState(false);
  const userIsLoggedIn = !!token;

  const logoutHandler = useCallback(() => {
    setToken('');
    localStorage.removeItem('token')
    localStorage.removeItem("expirationTime");

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  const loginHandler = (token, expirationTime, user) => {
    setToken(token);
      localStorage.setItem("token", token);
      localStorage.setItem("expirationTime", expirationTime)
      if(!user.displayname) {
        user.displayName = user.email;
      }
      localStorage.setItem("username", user.displayName)
      console.log(user.displayName)
  const remainingTime = calculateRemainingTime(expirationTime)

  logoutTimer = setTimeout(logoutHandler, remainingTime)
 
  };

  useEffect(() => {
    if (tokenData) {
      console.log(tokenData.duration)
      logoutTimer = setTimeout(logoutHandler, tokenData.duration);
    }
  }, [tokenData, logoutHandler]);

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
