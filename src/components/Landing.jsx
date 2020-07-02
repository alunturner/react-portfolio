import React from "react";
import { Paper, Typography } from "@material-ui/core";

function Landing() {
  return (
    <Paper elevation={5} id="landing">
      <Typography variant="h1">
        <a href={`#about`}>Alun Turner</a>
      </Typography>
      <Typography variant="h1">
        <a href={`#portfolio`}>Portfolio</a>
      </Typography>
      <Typography variant="h1">
        <a href={`#contact`}>Contact</a>
      </Typography>
    </Paper>
  );
}

export default Landing;
