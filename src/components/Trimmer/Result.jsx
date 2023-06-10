import React, {useState, useEffect} from "react";
import "./trimmer.css";
import CopyToClipboard from "react-copy-to-clipboard";
import LoadingGIF from '../../assets/loadingGIF.gif'

const Result = ({ isLoading, shortLink }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  if(isLoading) {
    return <img src={LoadingGIF} className="loading_shrt_url" alt="Loading..." />
	// return <p className="loading">Loading...</p>
  }

  return (
    <div>
      {shortLink ? (
        <div className="short-url">
          <p>{shortLink}</p>
          <CopyToClipboard
            text={shortLink}
            onCopy={() => {
              setCopied(true);
            }}
          >
            <button
              className={copied ? "copied" : ""}
              onClick={(e) => e.preventDefault()}
            >
              {copied ? "Copied!!" : "Copy"}
            </button>
          </CopyToClipboard>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Result;
