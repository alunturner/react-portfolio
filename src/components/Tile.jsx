import React from "react";
import picture from "../images/logo192.png";
import { Card, CardMedia } from "@material-ui/core";

function Tile({ project }) {
  return (
    <Card className="project-tile" key={project.name}>
      <CardMedia
        component="img"
        alt={`project logo for ${project.name}`}
        width="100%"
        src={picture}
        title={`project logo for ${project.name}`}
      />
    </Card>
  );
}

export default Tile;
