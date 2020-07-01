import React from "react";
import Tile from "./Tile";

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
      <Tile className="project-tile" key={project.name} project={project} />
    );
  });
}

export default Tiles;
