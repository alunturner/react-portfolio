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
    <Paper id="about" elevation={5}>
      <Card style={{ width: "75%", height: "40%" }}>
        <CardMedia
          component="img"
          alt="the author in profile"
          width="100%"
          src={alun}
          title="author profile"
        />
        <CardContent>
          <Typography variant="h2" gutterBottom={false}>
            <span className="about-span">A</span>bout me
          </Typography>
          <br />
          <Typography variant="body1">
            My name is Alun Turner and I'm a front-end developer based in
            Hampshire in the UK. I was a helicopter pilot in the military before
            changing career in 2020 (bad timing for a career change).
            <br />
            <br />
            I primarily write in JavaScript and work in React and Node.js,
            leaning towards React in my day to day role. The other things I use
            the most through work are Jest, React Testing Library, Lodash, SCSS
            and Material UI but I'm always learning and looking to improve. I've
            recently done two courses by Kent C Dodds which were great.
            <br />
            <br />
            Outside work I volunteer for Code Your Future and recently taught
            the React module to London course 8, as well as running weekly drop
            in JS sessions for the whole course.
          </Typography>
        </CardContent>
      </Card>
    </Paper>
  );
}

export default About;
