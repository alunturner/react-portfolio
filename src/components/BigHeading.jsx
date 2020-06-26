import React from "react";
import { Typography } from "@material-ui/core";

function BigHeading({ word }) {
  return (
    <Typography variant="h1">
      <a href={`#${word}`}>{word}</a>
    </Typography>
  );
}

export default BigHeading;
