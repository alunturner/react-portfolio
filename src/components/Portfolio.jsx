import React from "react";
import Tile from "./Tile";

function Portfolio() {
  return (
    <>
      <h3>PORTFOLIO</h3>
      <div style={{ display: "flex" }}>
        <Tile />
        <Tile />
        <Tile />
        <Tile />
      </div>
      <p>I'll also put a pdf of my CV on this part</p>
    </>
  );
}

export default Portfolio;
