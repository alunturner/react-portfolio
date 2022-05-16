import React, { useState } from "react";
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
          <div style={{ position: "relative" }}>
            <Typography variant="body1">{project.description}</Typography>
            {isClicked && (
              <Typography variant="body2" className="tech-description">
                {project.tech}
              </Typography>
            )}
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {project.appUrl && (
          <a href={project.appUrl}>
            <Button
              variant="outlined"
              size="small"
              startIcon={<WebAssetIcon />}
            >
              App
            </Button>
          </a>
        )}
        {project.repoUrl && (
          <a href={project.repoUrl}>
            <Button variant="outlined" size="small" startIcon={<GitHubIcon />}>
              Code
            </Button>
          </a>
        )}
      </CardActions>
    </Card>
  );
}

export default Tile;
