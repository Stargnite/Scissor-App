import React, { useState, useEffect } from "react";
import "./trimmer.css";
import './resultModal.css'
import CopyToClipboard from "react-copy-to-clipboard";
import LoadingGIF from "../../assets/loadingGIF.gif";
import { QRCodeCanvas } from "qrcode.react";
import ReactModal from "react-modal";
import {GrClose} from 'react-icons/gr'


const ResultModal = ({ isLoading, shortLink, isOpen, closeModal }) => {
  const [copied, setCopied] = useState(false);
  const [url, setUrl] = useState(shortLink);

  const downloadQRCode = (e) => {
    e.preventDefault();
    setUrl("");
  };

  const qrcode = (
    <QRCodeCanvas
      id="qrCode"
      value={shortLink}
      size={150}
      bgColor={"#CBD6E0"}
      level={"H"}
    />
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  if (isLoading) {
    return (
      <div className="trim_result">
        <img src={LoadingGIF} className="loading_shrt_url" alt="Loading..." />
      </div>
    );
  }

  return (
    <div className="trim_result">
      {shortLink ? (
        <ReactModal
          isOpen={isOpen}
          onRequestClose={closeModal}
          contentLabel="Modal"
          overlayClassName="result_overlay"
          className="result_modal"
        >
          <button onClick={closeModal} className="close_modal"><GrClose /></button>
            <div className="qrcode_pic">{qrcode}</div>
          <div className="short-url">
            <input
              type="text"
              value={shortLink}
              // onChange={qrCodeEncoder}
            />
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
          <div className="download_qr">
            <button onClick={downloadQRCode}>Download QR code</button>
          </div>
        </ReactModal>
      ) : (
        ""
      )}
    </div>
  );
};

export default ResultModal;
