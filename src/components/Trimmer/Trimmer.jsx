import React from "react";
import "./trimmer.css";

const Trimmer = () => {
  return (
    <div className="trimmer">
      <section>
        <form action="">
          <input type="text" placeholder="Paste URL here..." />
          <div className="customize">
            <div className="customize-dropdown">Customize domain</div>
            <input type="text" placeholder="Type Alias here" />
          </div>
          <button type="submit"> Trim URL</button>
        </form>
        <p>
          By clicking TrimURL, I agree to the{" "}
          <a href="">Terms of Service, Privacy Policy</a> and Use of Cookies.
        </p>
      </section>
    </div>
  );
};

export default Trimmer;
