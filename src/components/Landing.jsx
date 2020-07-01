import React from "react";
import { Paper, Typography } from "@material-ui/core";

function Landing() {
  let windowWidth = window.innerWidth;
  let stringLength = "Alun Turner".length;
  let sizePerChar = Math.floor((1.25 * windowWidth) / stringLength);

  return (
    <Paper
      elevation={5}
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
      }}
    >
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
