import React from "react";
import picture from "../images/logo192.png";
import { Paper } from "@material-ui/core";

function Contact() {
  return (
    <Paper>
      <img src={picture} alt="a project pic" style={{ width: "5vw" }} />
    </Paper>
  );
}

export default Contact;
