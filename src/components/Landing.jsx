import React from "react";
import { Typography } from "@material-ui/core";

function Landing() {
  let windowWidth = window.innerWidth;
  let stringLength = "Alun Turner".length;
  let sizePerChar = (1.2 * windowWidth) / stringLength;

  return (
    <>
      <Typography variant="h1" style={{ fontSize: `${sizePerChar}px` }}>
        <a href={`#about`}>Alun Turner</a>
      </Typography>
      <Typography variant="h1" style={{ fontSize: `${sizePerChar}px` }}>
        <a href={`#portfolio`}>Portfolio</a>
      </Typography>
      <Typography variant="h1" style={{ fontSize: `${sizePerChar}px` }}>
        <a href={`#contact`}>Contact</a>
      </Typography>
    </>
  );
}

export default Landing;
