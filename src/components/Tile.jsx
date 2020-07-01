import React from "react";
// import picture from "../images/nc-news-backend.png";
import {
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core";
import WebAssetIcon from "@material-ui/icons/WebAsset";
import GitHubIcon from "@material-ui/icons/GitHub";

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
            <WebAssetIcon />
            <Typography variant="body2">App</Typography>
          </Button>
        </a>
        <a href={project.repoUrl}>
          <Button>
            <GitHubIcon />
            <Typography variant="body2">Code</Typography>
          </Button>
        </a>
      </CardActions>
    </Card>
  );
}

export default Tile;
