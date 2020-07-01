import React from "react";
import picture from "../images/logo192.png";
import { Typography, Card, CardContent } from "@material-ui/core";

function Tile({ project }) {
  return (
    <Card
      className="project-tile"
      key={project.name}
      style={{ display: "flex", alignItems: "center" }}
    >
      <img src={picture} alt="placeholder" style={{ width: "20%" }} />
      <CardContent>
        <Typography>{`${project.name}, ${project.description}`}</Typography>
      </CardContent>
    </Card>
  );
}

export default Tile;
