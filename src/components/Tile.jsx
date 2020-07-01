import React from "react";
import picture from "../images/logo192.png";
import {
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core";

function Tile({ project }) {
  return (
    <Card className="project-tile" key={project.name}>
      <img src={picture} alt="placeholder" style={{ width: "20%" }} />
      <CardContent>
        <Typography>{`${project.name}, ${project.description}`}</Typography>
      </CardContent>
      <CardActions>
        <Button>Application</Button>
        <Button>Repository</Button>
      </CardActions>
    </Card>
  );
}

export default Tile;
