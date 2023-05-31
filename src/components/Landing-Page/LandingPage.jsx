import "./LandingPage.css";
import { Link, NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import ViewPort2 from "./ViewPort2";
import Trimmer from "../Trimmer/Trimmer";
import FAQ from "./FAQ-section/FAQ";
import Footer from "./footer/Footer";

export default function LandingPage() {
  return (
    <>
      <div className="background-design">
        <div className="floor"></div>
        <div className="oval"></div>
        <div className="bg-vector"></div>
        <div className="bg-vector2"></div>
        <div className="bg-vector3"></div>
      </div>
      <div className="home-first-vp">
        <nav>
          <div className="navbar">
            <div className="logo">
              <NavLink to="/">Scissor</NavLink>
            </div>
            <ul className="nav-links">
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
              <Link to="/login" id="log-in">
                Log in
              </Link>
              <Link to="/login" id="try-for-free">
                Try for free
              </Link>
            </div>
          </div>
        </nav>

        <div className="LP-content">
          <div className="home-text">
            <h1>
              {" "}
              Optimize Your Online Experience with Our Advanced{" "}
              <span className="intro-highlight">URL Shortening</span> Solution
            </h1>
            <p>
              Personalize your shortened URLs to align with your brand identity.
              Utilize custom slugs, branded links, and domain customization
              options to reinforce your brand presence and enhance user
              engagement.
            </p>

            <button id="sign-up">Sign Up</button>
            <a href="" className="learn-more">
              Learn more
            </a>
          </div>
        </div>
        <div className="link-ad">
          <div className="link-img">
            <div className="left"></div>
            <div className="center"></div>
            <div className="right"></div>
          </div>
          <div className="arrow">
            <FaArrowRight className="arrow-icon" />
          </div>
          <div className="link-text">
            <p>
              Seamlessly transform your long URLs into concise and shareable
              links with just few clicks.
            </p>
          </div>
        </div>
      </div>
      <ViewPort2 />
      <Trimmer />
      <FAQ />
      <Footer />
      <div className="year-created">
        <p>Terms of Service | Security | 2023 Scissor </p>
      </div>
    </>
  );
}
