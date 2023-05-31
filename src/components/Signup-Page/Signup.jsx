import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Authentication/Firebase/firebase";

const Signup = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [username, setUsername] = useState("");

  
  const handleSignup = (e) => {
    e.preventDefault();
    // navigate("/login", { replace: true });
    createUserWithEmailAndPassword(auth, userEmail, userPassword)
    .then((userCredentials) => {
      setUsername(userCredentials.user.displayName)
      console.log(username)
      console.log(userCredentials.user)
    })
    .catch((error) => {
      console.log(error);
    });
  }

  return (
    <div className="signup-content">
      <form  onSubmit={handleSignup} className="sign-up">
        <h1>Create account</h1>
        <label htmlFor="username">
          <span>Username:</span>
        </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="email">
          <span>Email:</span>
        </label>
        <input
          type="email"
          id="email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <label htmlFor="password">
          <span>Password:</span>
        </label>
        <input
          type="password"
          id="password"
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
        />
        <button type="submit" className="btn">
          Proceed
        </button>
        <p>
          Already a user? <Link to="/Login">Login</Link>
        </p>
      </form>

      <Link to="/">
        <button className="home-btn" onClick={() => useNavigate(-1)}>
          Go Home
        </button>
      </Link>
    </div>
  );
};

export default Signup;
