import React, { useEffect } from "react";
import "./trimmer.css";
import { useState } from "react";
import axios from "axios";
import Result from "./Result";

const Trimmer = () => {
  const [shortLink, setShortLink] = useState("");
  const [inputLink, setInputLink] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res = await axios(
        `https://api.shrtco.de/v2/shorten?url=${inputLink}`
      );
      setShortLink(res.data.result.full_short_link);
      console.log(res.data)
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="trimmer">
      <section>
        <form action="">
          <input
            type="text"
            placeholder="Paste URL here..."
            onChange={(e) => {
              setInputLink(e.target.value);
            }}
          />
          <div className="customize">
            <div className="customize-dropdown">Customize domain</div>
            <input type="text" placeholder="Type Alias here" />
          </div>
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              fetchData();
            }}
          >
            Trim URL
          </button>
          <Result isLoading={isLoading} shortLink={shortLink} />
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
