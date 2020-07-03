import React from "react";
import { Paper, Typography } from "@material-ui/core";

function Landing() {
  return (
    <Paper elevation={5} id="landing">
      <Typography variant="h1">
        <a href={`#about`} style={{ width: "100%" }}>
          <span className="about-span">A</span>lun{" "}
          <span className="about-span">T</span>urner
        </a>
      </Typography>
      <Typography variant="h1">
        <a href={`#portfolio`}>
          <span className="portfolio-span">P</span>ortfolio
        </a>
      </Typography>
      <Typography variant="h1">
        <a href={`#contact`}>
          <span className="contact-span">C</span>ontact
        </a>
      </Typography>
    </Paper>
  );
}

export default Landing;
