import React from "react";
import Tiles from "./Tiles";
import geometric from "../images/geometric.jpg";
import {
  Typography,
  Paper,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@material-ui/core";

function Portfolio() {
  // geometric is 1600 x 900
  let cardWidth = window.innerWidth * 0.75;
  let scaleFactor = cardWidth / 1600;
  let backgroundHeight = 900 * scaleFactor;
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
      <Card style={{ width: "75%" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="geometric background"
            width="100%"
            src={geometric}
            title="geometric background"
          />
          <div
            className="project-tiles-container"
            style={{ height: `${backgroundHeight}px` }}
          >
            <Tiles />
          </div>
          <CardContent>
            <Typography variant="h4">PORTFOLIO</Typography>
            <Typography variant="body1">
              This is a short description of the work I like doing
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Paper>
  );
}

export default Portfolio;
