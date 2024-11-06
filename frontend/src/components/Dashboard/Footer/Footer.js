import React from "react";
import "./Footer.css";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
     <div className="footer-sections">
  <div className="footer-section">
    <h3>Links for all DSS products</h3>
    <div className="footer-content">
      <p>
        Health DSS
        <br />
        Agriculture DSS
        <br />
        Ocean DSS
        <br />
        CDIS
      </p>
    </div>
  </div>

  <div className="vertical-line"></div>

  <div className="footer-section">
    <h3>Response</h3>
    <div className="footer-content">
      <p>
        Our team works with communities to provide rapid, life-saving
        interventions when disaster strikes, ensuring quick relief.
      </p>
    </div>
  </div>

  <div className="vertical-line"></div>

  <div className="footer-section">
    <h3>Contact</h3>
    <div className="footer-content">
      <p>
        Email: info@rimes.int
        <br />
        Website: www.rimes.int
      </p>
    </div>
  </div>
</div>

      {/* Footer bottom section with logos and social media */}
      <div className="footer-bottom">
        <img src="./timor.png" alt="Timor Logo" className="footer-logo" />

        <div className="social-media-container">
          <div className="social-media">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
          </div>

          {/* Footer text directly below the social media icons */}
          <div className="footer-text">
            <p>
              © 2024 Disaster Risk Reduction and Decision Support System. All
              rights reserved.
            </p>
          </div>
        </div>

        <img src="./rimes-logo.svg" alt="RIMES Logo" className="footer-logo" />
      </div>
    </footer>
  );
};

export default Footer;