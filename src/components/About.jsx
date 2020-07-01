import React from "react";
import alun from "../images/alun2.jpg";
import {
  Typography,
  Paper,
  Card,
  CardMedia,
  CardContent,
} from "@material-ui/core";

function About() {
  return (
    <Paper
      id="about"
      elevation={5}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "10vh 0",
        backgroundColor: "#005ba8",
      }}
    >
      <Card style={{ width: "75%", height: "40%" }}>
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
            My name is Alun Turner and I'm a trainee full stack web developer
            based in Hampshire in the UK. I used to be a helicopter pilot in the
            military and now I'm swapping cyclic and collective for keyboard and
            mouse.
            <br />I primarily write in Javascript and work in React and Node.js.
            Although these are my primary tools I'm always on the lookout for
            useful libraries, languages, frameworks and services to learn about
            and work with to expand my skillset.
          </Typography>
        </CardContent>
      </Card>
    </Paper>
  );
}

export default About;
