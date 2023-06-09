import { Link, useNavigate } from "react-router-dom";
import classes from "./Signup.module.css";
import { useEffect, useState, useContext, useRef } from "react";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider, db } from "../Authentication/Firebase/firebase";
import { FaGoogle, FaApple, FaRegEye } from "react-icons/fa";
import AuthContext from "./../../store/auth-context";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [confirmedPass, setConfirmedPass] = useState("");
  // const [passwordMatch, setPasswordMathch] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const signUpWithGoogle = async () => {
    setIsLoading(true);
    try {
      const userCredential = await signInWithPopup(auth, provider);
      const user = userCredential.user;
      authCtx.login(user.email);
      navigate("/dashboard");
      setIsLoading(false);
    } catch (error) {
      console.log("error:", error);
    }
  };

  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);

  const authCtx = useContext(AuthContext);

  const submitSignUp = (e) => {
    e.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    let enteredPassword;
    if (passwordInputRef.current.value === confirmedPass) {
      enteredPassword = passwordInputRef.current.value;
    } else {
      alert("Password don't match");
    }
    (async () => {
      try {
        setIsLoading(true);
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          enteredEmail,
          enteredPassword
        );
        const user = userCredential.user;
        console.log("user>>>", user.email);
        authCtx.login(user.email);
        navigate("/dashboard");
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  };

  return (
    <div className={classes.signup_content}>
      <div className={classes.auto_signup}>
        <h5>Sign up with:</h5>
        <div className={classes.auto_signup_btn}>
          <button onClick={signUpWithGoogle}>
            <FaGoogle />
            <div className={classes.auto_signup_text}>Google</div>
          </button>
          <button>
            <FaApple />
            <div className={classes.auto_signup_text}>Apple</div>
          </button>
        </div>
        <p>OR</p>
      </div>
      <form onSubmit={submitSignUp} className={classes.sign_up}>
        <div className={classes.input_fields}>
          <input
            type="text"
            id="username"
            placeholder="Username"
            ref={emailInputRef}
            required
          />
          <input
            type="email"
            id="email"
            placeholder="Email address"
            ref={emailInputRef}
            required
          />
          <div className={classes.password_cont}>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Password"
              ref={passwordInputRef}
              required
            />
            <FaRegEye
              className={classes.pass_toggle}
              onClick={togglePasswordVisibility}
            />
          </div>

          <div className={classes.password_cont}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Confirm Password"
              onChange={(e) => setConfirmedPass(e.target.value)}
              required
            />
            <FaRegEye
              className={classes.pass_toggle}
              onClick={togglePasswordVisibility}
            />
          </div>

          <p className={classes.pass_desc}>
            6 or more characters, one number, one uppercase & one lower case.
          </p>
        </div>

        <button className={classes.signup_btn} type="submit">
          Sign up with Email
        </button>

        <p className={classes.to_login}>
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </form>
      <div className={classes.terms_condition}>
        By signing up, you agree to <br /> Scissor's
        <a href="">Terms of Service</a>, <a href="">Privacy Policy</a> and{" "}
        <a href="">Acceptable Use Policy.</a>
      </div>
    </div>
  );
};

export default Signup;
