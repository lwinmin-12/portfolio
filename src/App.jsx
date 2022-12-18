import React, { useRef } from "react";
import { Navbar } from "./component";
import { AboutMe, Home, Skill, Project, Contact, Footer } from "./Page";
import Collection from "./store/Collection";
const App = () => {
  return (
    <Collection>
      <div className=" relative">
        <Navbar />
        <Home />
        <AboutMe />
        <Skill />
        <Project />
        <Contact />
        <Footer />
      </div>
    </Collection>
  );
};

export default App;
{
  /* <Navbar />
      <Home />
      <AboutMe />
      <Technology />
      <Project />
      <Contact />
      <Footer /> */
}
