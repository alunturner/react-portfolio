import React from "react";
import Tile from "./Tile";

function Tiles() {
  let arrayOfProjects = [
    {
      name: "Tap That Map",
      img: "tap-that-map.png",
      description:
        "A full stack progressive web app multiplayer game. The aim of the game is to guess countries' locations on a map and it *will* improve your geographical knowledge, guaranteed. Click to see what it's built with.",
      tech:
        "Built with React, Reach Router, Material-UI, Howler on the front end. Firebase authentication, and realtime database on the backend. Hosted on Firebase.",
      appUrl: "https://tapthatmapgame.firebaseapp.com/",
      repoUrl: "https://github.com/ARTurnerGit/tap-that-map",
    },
    {
      name: "Visualiser App",
      img: "visualiser-frontend.png",
      description:
        "A full stack web app designed to fulfil the need of me and my friends for a way to watch back team Risk games for the post-game debrief. Click to see what it's built with.",
      tech: "Built with React, CSS and FontAwesome. Hosted on Netlify.",
      appUrl: "https://art-visualiser.netlify.app/",
      repoUrl: "https://github.com/ARTurnerGit/fe-mini-dominator",
    },
    {
      name: "Visualiser Server",
      img: "visualiser-backend.png",
      description:
        "Whilst the initial plan was for the Risk visualiser to be built as a front end only, it required a proxy server to allow it access to the correct information. This is that proxy server. Click to see what it's built with.",
      tech:
        "Built with Node.js, Express, Axios, JSDom and node-html-parser. Hosted on Heroku.",
      appUrl: "https://dominator-proxy-server.herokuapp.com/",
      repoUrl: "https://github.com/ARTurnerGit/dominator-proxy-server",
    },
    {
      name: "NC News App",
      img: "nc-news-frontend.png",
      description:
        "A news website designed to be similar in functionality to Reddit.com. It allows users to view, comment and vote on articles and comments. Click to see what it's built with.",
      tech: "Built with React, Reach Router, Axios and CSS. Hosted on Netlify.",
      appUrl: "https://art-fe-nc-news.netlify.app/",
      repoUrl: "https://github.com/ARTurnerGit/fe-nc-news",
    },
    {
      name: "NC News Server",
      img: "nc-news-backend.png",
      description:
        "A RESTful web API designed as the back end for NC News. This server interacts with the PostgreSQL database providing CRUD functionality for articles, users, comments and votes. Click to see what it's built with.",
      tech:
        "Built with Node.js, Express, Mocha, Chai, Supertest, node-postgres and a PostgreSQL database. All hosted on Heroku.",
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
