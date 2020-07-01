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
            My name is Alun Turner and I'm a trainee web developer based in
            Hampshire in the UK. I was previously a helicopter pilot in the
            military but now I'm swapping cyclic and collective for keyboard and
            mouse instead.
            <br />I love to work with React but I'm constantly seeking out new
            things to learn and work with. Please have a look at my work and get
            in touch if you'd like.
          </Typography>
        </CardContent>
      </Card>
    </Paper>
  );
}

export default About;
