import { useState } from "react";
import "./Login.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { auth } from "../Authentication/Firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const redirectPath = location.state?.path || "/dashboard";

  const handleLogin = (e) => {
    e.preventDefault();
    
    signInWithEmailAndPassword(auth, userEmail, userPassword)
    .then((userCredentials) => {
      console.log(userCredentials);
      alert('sucessful login');
      navigate(redirectPath, { replace: true });
    })
    .catch((error) => {
      console.log(error);
      if(userEmail && !userPassword) {
        alert('please input password')
      } else if(!userEmail && userPassword) {
        alert('please input email')
      } else if(!userEmail && !userPassword) {
        alert('please fill in your details')
      }
    });
  };

  return (
    <div className="login-content">
      <form onSubmit={handleLogin} id="log-in">
        <h1>Login</h1>
        <label htmlFor="email">
          <span>Email:</span>
        </label>
        <input
          type="email"
          id="email"
          value={userEmail}
          placeholder="Your Email"
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <label htmlFor="password">
          <span>Password:</span>
        </label>
        <input
          type="password"
          id="password"
          value={userPassword}
          placeholder="Your Password"
          onChange={(e) => setUserPassword(e.target.value)}
        />
        <button className="btn" type="submit">
          Login
        </button>
        <p>
          Don't have an account? <Link to="/signup">Signup</Link>
        </p>
      </form>
      <Link to="/">
        <button
          type="submit"
          className="home-btn"
          onClick={() => useNavigate(-1)}
        >
          {" "}
          Go Home
        </button>
      </Link>
    </div>
  );
}
