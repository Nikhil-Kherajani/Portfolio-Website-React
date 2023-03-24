import React from "react";
import TechStackimg from "../../img/TechStackimg.png";
import "./TechStack.css";

export default function TechStack() {
  return (
    <div className="techstackdiv">
      <p className="techstackp">TechStack</p>
      <img
        className="techstackimg"
        src={TechStackimg}
        alt="TechStack"
        // style={{ width: "90%", height: "auto", alignSelf: "center" }}
      />
    </div>
  );
}
