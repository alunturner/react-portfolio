import React from "react";
import { Paper, Typography } from "@material-ui/core";

function Landing() {
  let windowWidth = window.innerWidth;
  let stringLength = "Alun Turner".length;
  let sizePerChar = (1.3 * windowWidth) / stringLength;

  return (
    <Paper elevation={5}>
      <Typography variant="h1" style={{ fontSize: `${sizePerChar}px` }}>
        <a href={`#about`}>Alun Turner</a>
      </Typography>
      <Typography variant="h1" style={{ fontSize: `${sizePerChar}px` }}>
        <a href={`#portfolio`}>Portfolio</a>
      </Typography>
      <Typography variant="h1" style={{ fontSize: `${sizePerChar}px` }}>
        <a href={`#contact`}>Contact</a>
      </Typography>
    </Paper>
  );
}

export default Landing;
