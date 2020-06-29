import React from "react";
import { Paper, Typography } from "@material-ui/core";

function Landing() {
  let windowWidth = window.innerWidth;
  let stringLength = "Alun Turner".length;
  let sizePerChar = (1.2 * windowWidth) / stringLength;

  return (
    <Paper>
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
