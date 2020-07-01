import React from "react";
import Tile from "./Tile";

function Tiles() {
  let arrayOfProjects = [
    {
      name: "Tap That Map",
      img: "tap-that-map.png",
      description: "Description of project 1",
      tech: ["tool1", "tool2"],
      appUrl: "https://tapthatmapgame.firebaseapp.com/",
      repoUrl: "https://github.com/ARTurnerGit/tap-that-map",
    },
    {
      name: "Visualiser App",
      img: "visualiser-frontend.png",
      description: "Description of project 2",
      tech: ["tool1", "tool2"],
      appUrl: "https://art-visualiser.netlify.app/",
      repoUrl: "https://github.com/ARTurnerGit/fe-mini-dominator",
    },
    {
      name: "Visualiser Server",
      img: "visualiser-backend.png",
      description: "Description of project 3",
      tech: ["tool1", "tool2"],
      appUrl: "https://dominator-proxy-server.herokuapp.com/",
      repoUrl: "https://github.com/ARTurnerGit/dominator-proxy-server",
    },
    {
      name: "NC News App",
      img: "nc-news-frontend.png",
      description: "Description of project 4",
      tech: ["tool1", "tool2"],
      appUrl: "https://art-fe-nc-news.netlify.app/",
      repoUrl: "https://github.com/ARTurnerGit/fe-nc-news",
    },
    {
      name: "NC News Server",
      img: "nc-news-backend.png",
      description: "Description of project 5",
      tech: ["tool1", "tool2"],
      appUrl: "https://art-news-server.herokuapp.com/api",
      repoUrl: "https://github.com/ARTurnerGit/be-nc-news",
    },
  ];
  return arrayOfProjects.map((project) => {
    return (
      <Tile className="project-tile" key={project.name} project={project} />
    );
  });
}

export default Tiles;
