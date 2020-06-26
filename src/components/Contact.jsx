import React from "react";
import LeftColumn from "./LeftColumn";
import RightColumn from "./RightColumn";
import { Typography, Paper } from "@material-ui/core";

function Contact() {
  return (
    <>
      <Typography variant="h3">CONTACT</Typography>
      <Paper style={{ display: "flex" }}>
        <LeftColumn />
        <RightColumn />
      </Paper>
    </>
  );
}

export default Contact;
