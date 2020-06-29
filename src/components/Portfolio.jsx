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
  CardActions,
} from "@material-ui/core";

function Portfolio() {
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
      <Card style={{ width: "75%", height: "40%" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="geometric background"
            width="100%"
            src={geometric}
            title="geometric background"
          />
          <Tiles />
          <CardContent>
            <Typography variant="h4">PORTFOLIO</Typography>
            <Typography variant="body1">
              This is a short description of the work I like doing
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>I'll put a button here for downloading a cv</CardActions>
      </Card>
    </Paper>
  );
}

export default Portfolio;
