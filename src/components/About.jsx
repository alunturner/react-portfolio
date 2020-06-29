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
            alt="the author in profile"
            width="100%"
            src={alun}
            title="author profile"
          />
          <CardContent>
            <Typography variant="h4">ABOUT ME</Typography>
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
