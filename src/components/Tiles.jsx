import React from "react";
import picture from "../images/logo192.png";
import { Card, CardActionArea, CardMedia } from "@material-ui/core";

function Tiles() {
  let arrayOfProjects = [
    {
      name: "project1",
      img: "",
      description: "Description of project 1",
      tech: ["tool1", "tool2"],
    },
    {
      name: "project2",
      img: "",
      description: "Description of project 2",
      tech: ["tool1", "tool2"],
    },
    {
      name: "project3",
      img: "",
      description: "Description of project 3",
      tech: ["tool1", "tool2"],
    },
    {
      name: "project4",
      img: "",
      description: "Description of project 4",
      tech: ["tool1", "tool2"],
    },
    {
      name: "project5",
      img: "",
      description: "Description of project 5",
      tech: ["tool1", "tool2"],
    },
  ];
  return arrayOfProjects.map((project) => {
    return (
      <Card className="project-tile" key={project.name}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={`project logo for ${project.name}`}
            width="100%"
            src={picture}
            title={`project logo for ${project.name}`}
          />
        </CardActionArea>
      </Card>
    );
  });
}

export default Tiles;
