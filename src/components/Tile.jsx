import React from "react";
// import picture from "../images/nc-news-backend.png";
import {
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core";

const images = require.context("../images", true);

function Tile({ project }) {
  let picture = images("./" + project.img);
  return (
    <Card className="project-tile" key={project.name}>
      <img src={picture} alt="placeholder" />
      <CardContent>
        <Typography variant="h4">{project.name}</Typography>
        <Typography variant="body1">{project.description}</Typography>
      </CardContent>
      <CardActions>
        <a href={project.appUrl}>
          <Button>
            <Typography variant="body2">Application</Typography>
          </Button>
        </a>
        <a href={project.repoUrl}>
          <Button>
            <Typography variant="body2">Repository</Typography>
          </Button>
        </a>
      </CardActions>
    </Card>
  );
}

export default Tile;
