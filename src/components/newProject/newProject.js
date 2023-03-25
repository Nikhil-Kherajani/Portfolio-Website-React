import React, { useState } from "react";

// import { Helmet } from "react-helmet";

import "./newProject.css";
import hobbyconnectlogo from "../../img/HobbyConnectAppLogo.png";
import extensionlogo from "../../img/Simple Colored Photo Framed Love Themed Minimalist Movie Poster.png";

function NewProject() {
  // const showMoreButton = document.querySelector(".show-more-button");

  // showMoreButton.addEventListener("click", () => {

  // });
  const [showMore, setShowMore] = useState(false);

  function toggleShowMore() {
    setShowMore(!showMore);
  }

  return (
    <div className="pata_nahi">
      <p className="projectsheading">Projects</p>

      <div className="home-blog-post-card">
        <img
          alt="image"
          src={hobbyconnectlogo}
          image_src=""
          className="home-image"
        />
        <div className="home-container1">
          <div className="home-container2">
            <span className="home-text">ANDROID APP</span>
            <span className="home-text1">MARCH 2023</span>
          </div>
          <h1 className="home-text2">Hobby Connect</h1>
          <span className="home-text3">
            Connect with like-minded people, effortlessly, It suggest users with
            having similar Hobbies or Interest & sorts people based on their
            location, has abusive filtered chat feature, etc ...
          </span>
          <div className="home-container3">
            <div className="home-profile">
              <a
                href="https://hobbyconnect.netlify.app/"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link button pulse"
              >
                Live Preview
              </a>
            </div>
            <a
              href="https://www.youtube.com/watch?v=A5q8QH0QceE&ab_channel=NikhilKherajani%28Dev%29"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link1"
            >
              Demo Video -&gt;
            </a>
          </div>
        </div>
      </div>
      <div className="home-blog-post-card">
        <img
          alt="image"
          src={extensionlogo}
          image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
          className="home-image"
        />
        <div className="home-container1">
          <div className="home-container2">
            <span className="home-text">CHROME EXTENSION</span>
            <span className="home-text1">MARCH 2023</span>
          </div>
          <h1 className="home-text2">LeetAssist & GeeksAssist</h1>
          <span className="home-text3">
            LeetAssist & GeeksAssist are coding helper extension, provides Hints
            and Prerequisites Question for questions on leetcode and
            GeeksforGeeks, it has voting system and user can also contribute to
            add hints and Prerequisites ...
          </span>
          <div className="home-container3">
            <div className="home-profile">
              <a
                href="https://leetassistandgeeksassist.netlify.app/"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link button pulse"
              >
                Live Preview
              </a>
            </div>
            <a
              href="https://google.com"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link1"
            >
              Demo Video -&gt;
            </a>
          </div>
        </div>
      </div>
      {showMore && (
        <div>
          <p>work in progress </p>
          <p>Thanks for checking, soon add more projects.</p>
        </div>
      )}
      {/* <button className="show-more-button">Show more</button> */}

      <button className="show-more-button" onClick={toggleShowMore}>
        {showMore ? "Show less" : "Show more"}
      </button>
    </div>
  );
}

export default NewProject;
