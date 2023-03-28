import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  GitHub as GitHubIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  YouTube as YouTubeIcon,
  LinkedIn as LinkedInIcon,
} from "@material-ui/icons";
import "./bottom.css";

const useStyles = makeStyles((theme) => ({
  socialLink: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    color: theme.palette.text.secondary,
    transition: "color 0.2s ease-in-out",
    "&:hover": {
      color: theme.palette.text.primary,
    },
  },
  socialIcon: {
    marginRight: theme.spacing(1),
  },
}));

function Bottom() {
  const classes = useStyles();

  return (
    <div className="social-menu">
      {/* <h1 className="social-title">Follow me</h1> */}
      <ul className="social-list">
        <li className="social-item">
          <a
            href="https://github.com/Nikhil-Kherajani"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.socialLink}
          >
            <GitHubIcon
              fontSize="large"
              className={`${classes.socialIcon} fb-icon`}
            />
            {/* <span className="social-text">Facebook</span> */}
          </a>
        </li>
        <li className="social-item">
          <a
            href="https://twitter.com/KherajaniNikhil"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.socialLink}
          >
            <TwitterIcon
              fontSize="large"
              className={`${classes.socialIcon} tt-icon`}
            />
            {/* <span className="social-text">Twitter</span> */}
          </a>
        </li>
        <li className="social-item">
          <a
            href="https://www.instagram.com/nikhil_kherajani_/"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.socialLink}
          >
            <InstagramIcon
              fontSize="large"
              className={`${classes.socialIcon} ig-icon`}
            />
            {/* <span className="social-text">Instagram</span> */}
          </a>
        </li>
        <li className="social-item">
          <a
            href="https://www.youtube.com/@nikhilkherajanidev"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.socialLink}
          >
            <YouTubeIcon
              fontSize="large"
              className={`${classes.socialIcon} yt-icon`}
            />
            {/* <span className="social-text">YouTube</span> */}
          </a>
        </li>
        <li className="social-item">
          <a
            href="https://www.linkedin.com/in/nikhil-kherajani/"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.socialLink}
          >
            <LinkedInIcon
              fontSize="large"
              className={`${classes.socialIcon} li-icon`}
            />
            {/* <span className="social-text">LinkedIn</span> */}
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Bottom;
