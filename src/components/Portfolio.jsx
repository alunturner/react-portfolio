import React from "react";
import Tiles from "./Tiles";
import geometric from "../images/geometric.jpg";
import {
  Button,
  Typography,
  Paper,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
} from "@material-ui/core";

function Portfolio() {
  // geometric is 1280 x 914px
  let cardWidth = window.innerWidth * 0.75;
  let scaleFactor = cardWidth / 1280;
  let backgroundHeight = 914 * scaleFactor;
  return (
    <Paper
      id="portfolio"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "10vh 0",
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
        <CardActions>
          <Button size="small" variant="contained">
            Download CV
          </Button>
        </CardActions>
      </Card>
    </Paper>
  );
}

export default Portfolio;
