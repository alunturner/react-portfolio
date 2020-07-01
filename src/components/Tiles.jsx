import React from "react";
import Tile from "./Tile";

function Tiles() {
  let arrayOfProjects = [
    {
      name: "Tap That Map",
      img: "tap-that-map.png",
      description: "Description of project 1",
      tech: ["tool1", "tool2"],
    },
    {
      name: "Visualiser App",
      img: "visualiser-frontend.png",
      description: "Description of project 2",
      tech: ["tool1", "tool2"],
    },
    {
      name: "Visualiser Server",
      img: "visualiser-backend.png",
      description: "Description of project 3",
      tech: ["tool1", "tool2"],
    },
    {
      name: "NC News App",
      img: "nc-news-frontend.png",
      description: "Description of project 4",
      tech: ["tool1", "tool2"],
    },
    {
      name: "NC News Server",
      img: "nc-news-backend.png",
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
