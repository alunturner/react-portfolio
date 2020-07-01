import React from "react";
import Tiles from "./Tiles";
import { Typography, Paper, Card, CardContent } from "@material-ui/core";

function Portfolio() {
  // geometric is 1600 x 900
  // let cardWidth = window.innerWidth * 0.75;
  // let scaleFactor = cardWidth / 1600;
  return (
    <Paper
      id="portfolio"
      elevation={5}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "10vh 0",
        backgroundColor: "#a3c1ad",
      }}
    >
      <Card className="portfolio-container">
        <CardContent>
          <Typography variant="h4">PORTFOLIO</Typography>
          <div className="tile-container">
            <Tiles />
          </div>
        </CardContent>
      </Card>
    </Paper>
  );
}

export default Portfolio;
