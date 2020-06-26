import React from "react";
import alun from "../images/alun2.jpg";
import { Typography, Card } from "@material-ui/core";

function About() {
  return (
    <>
      <Typography variant="h3">ABOUT ME</Typography>
      <Card>
        <img
          src={alun}
          alt="this will be my face"
          style={{ display: "inline-block", height: "10vh" }}
        />
      </Card>
      <Typography variant="body1">Some text about me goes here</Typography>
    </>
  );
}

export default About;
