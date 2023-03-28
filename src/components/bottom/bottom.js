import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import "./bottom.css";

function Bottom() {
  return (
    <div className="social-menu">
      {/* <h1 className="social-title">Follow me</h1> */}
      <ul className="social-list">
        <li className="social-item">
          <a
            href="https://github.com/Nikhil-Kherajani"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FontAwesomeIcon icon={faGithub} className="social-icon fb-icon" />
            {/* <span className="social-text">Facebook</span> */}
          </a>
        </li>
        <li className="social-item">
          <a
            href="https://twitter.com/KherajaniNikhil"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FontAwesomeIcon icon={faTwitter} className="social-icon tt-icon" />
            {/* <span className="social-text">Twitter</span> */}
          </a>
        </li>
        <li className="social-item">
          <a
            href="https://www.instagram.com/nikhil_kherajani_/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="social-icon ig-icon"
            />
            {/* <span className="social-text">Instagram</span> */}
          </a>
        </li>
        <li className="social-item">
          <a
            href="https://www.youtube.com/@nikhilkherajanidev"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FontAwesomeIcon icon={faYoutube} className="social-icon yt-icon" />
            {/* <span className="social-text">YouTube</span> */}
          </a>
        </li>
        <li className="social-item">
          <a
            href="https://www.linkedin.com/in/nikhil-kherajani/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="social-icon li-icon"
            />
            {/* <span className="social-text">LinkedIn</span> */}
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Bottom;
