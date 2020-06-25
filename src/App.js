import React from "react";
import "./App.css";
import Landing from "./components/Landing";
import About from "./components/About";
import Separator from "./components/Separator";

function App() {
  return (
    <>
      <Landing />
      <Separator />
      <About />
      <Separator />
      <Separator />
    </>
  );
}

export default App;
