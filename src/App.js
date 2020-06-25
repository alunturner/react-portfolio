import React from "react";
import "./App.css";
import Separator from "./components/Separator";
import Landing from "./components/Landing";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Landing />
      <Separator />
      <About />
      <Separator />
      <Portfolio />
      <Separator />
      <Contact />
    </>
  );
}

export default App;
