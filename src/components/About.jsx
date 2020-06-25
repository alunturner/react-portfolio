import React from "react";
import picture from "../images/logo512.png";

function About() {
  return (
    <>
      <h3>ABOUT ME</h3>
      <img
        src={picture}
        alt="this will be my face"
        style={{ display: "inline-block", height: "10vh" }}
      />
      <p>Some text about me goes here</p>
    </>
  );
}

export default About;
