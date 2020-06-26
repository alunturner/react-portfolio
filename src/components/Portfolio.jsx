import React from "react";
import Tile from "./Tile";
import { Typography, Card } from "@material-ui/core";

function Portfolio() {
  return (
    <>
      <Typography variant="h3">PORTFOLIO</Typography>
      <Card style={{ display: "flex" }}>
        <Tile />
        <Tile />
        <Tile />
        <Tile />
      </Card>
      <Typography variant="body1">
        I'll also put a pdf of my CV on this part
      </Typography>
    </>
  );
}

export default Portfolio;
