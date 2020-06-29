import React from "react";
import alun from "../images/alun2.jpg";
import {
  Typography,
  Paper,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@material-ui/core";

function About() {
  return (
    <Paper
      id="about"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Card>
        <CardActionArea>
          <CardMedia>
            <img
              src={alun}
              alt="this will be my face"
              style={{ width: "100%" }}
            />
          </CardMedia>
          <CardContent>
            <Typography variant="h2">A bit about me</Typography>
            <Typography variant="body1">
              Some text about me goes here
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Paper>
  );
}

export default About;
