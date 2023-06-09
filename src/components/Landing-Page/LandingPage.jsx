import classes from"./LandingPage.module.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import ViewPort2 from "./ViewPort2";
import Trimmer from "../Trimmer/Trimmer";
import FAQ from "./FAQ-section/FAQ";
import Footer from "./footer/Footer";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";

export default function LandingPage() {
  const authCtx = useContext(AuthContext);

  const navigate = useNavigate();

  const handleGetStarted = () => {
    if (authCtx.token) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <div className={classes.background_design}>
        <div className={classes.floor}></div>
        <div className={classes.oval}></div>
        <div className={classes.bg_vector}></div>
        <div className={classes.bg_vector2}></div>
        <div className={classes.bg_vector3}></div>
      </div>
      <div className={classes.home_first_vp}>
        <nav>
          <div className={classes.navbar}>
            <div className={classes.logo}>
              <NavLink to="/">SCISSOR</NavLink>
            </div>
            <ul className={classes.nav_links}>
              <li>
                <NavLink to="/">My URLs</NavLink>
              </li>
              <li>
                <NavLink to="/">Features</NavLink>
              </li>
              <li>
                <NavLink to="/">Pricing</NavLink>
              </li>
              <li>
                <NavLink to="">Analytics</NavLink>
              </li>
              <li>
                <NavLink to="">FAQs</NavLink>
              </li>
            </ul>

            <div className="access-btns">
              <Link to="/login" className={classes.log_in}>
                Log in
              </Link>
              <Link to="/login" className={classes.try_for_free}>
                Try for free
              </Link>
            </div>
          </div>
        </nav>

        <div className={classes.LP_content}>
          <div className={classes.home_text} >
            <h1>
              {" "}
              Optimize Your Online Experience with Our Advanced{" "}
              <span className={classes.intro_highlight}>URL Shortening</span> Solution
            </h1>
            <p>
              Personalize your shortened URLs to align with your brand identity.
              Utilize custom slugs, branded links, and domain customization
              options to reinforce your brand presence and enhance user
              engagement.
            </p>

            <button onClick={() => {}}>
              <Link to="/login" className={classes.sign_up}>
                Sign Up
              </Link>
            </button>
            <a href="" className={classes.learn_more}>
              Learn more
            </a>
          </div>
        </div>
        <div className={classes.link_ad}>
          <div className={classes.link_img}>
            <div className={classes.left}></div>
            <div className={classes.center}></div>
            <div className={classes.right}></div>
          </div>
          <div className={classes.arrow}>
            <FaArrowRight className={classes.arrow_icon} />
          </div>
          <div className={classes.link_text}>
            <p>
              Seamlessly transform your long URLs into concise and shareable
              links with just few clicks.
            </p>
          </div>
        </div>
      </div>
      <ViewPort2 />
      <div className={classes.get_started}>
        <h1>Revolutionizing Link Optimization</h1>
        <button onClick={handleGetStarted}>Get Started</button>
      </div>
      <FAQ />
      <Footer />
      <div className={classes.year_created}>
        <p>Terms of Service | Security | 2023 Scissor </p>
      </div>
    </>
  );
}
