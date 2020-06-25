import React from "react";
import LeftColumn from "./LeftColumn";
import RightColumn from "./RightColumn";

function Contact() {
  return (
    <>
      <h3>CONTACT</h3>
      <div style={{ display: "flex" }}>
        <LeftColumn />
        <RightColumn />
      </div>
    </>
  );
}

export default Contact;
