import React, { useState } from "react";
// import picture from "../images/nc-news-backend.png";
import {
  Typography,
  Card,
  CardContent,
  CardActions,
  CardActionArea,
  Button,
} from "@material-ui/core";
import WebAssetIcon from "@material-ui/icons/WebAsset";
import GitHubIcon from "@material-ui/icons/GitHub";

const images = require.context("../images", true);

function Tile({ project }) {
  let picture = images("./" + project.img);
  let [isClicked, setClicked] = useState(false);

  return (
    <Card className="project-tile" key={project.name}>
      <CardActionArea onClick={() => setClicked(!isClicked)}>
        <img src={picture} alt="placeholder" />
        <CardContent>
          <Typography variant="h4">{project.name}</Typography>
          <br />
          <div>
            <Typography variant="body1">{project.description}</Typography>
            {isClicked && (
              <Typography variant="body2">{project.tech}</Typography>
            )}
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <a href={project.appUrl}>
          <Button variant="outlined" size="small">
            <WebAssetIcon />
            <Typography variant="body1">App</Typography>
          </Button>
        </a>
        <a href={project.repoUrl}>
          <Button variant="outlined" size="small">
            <GitHubIcon />
            <Typography variant="body1">Code</Typography>
          </Button>
        </a>
      </CardActions>
    </Card>
  );
}

export default Tile;
