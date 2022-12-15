import React from "react";
import { Navbar } from "./component";
import { AboutMe, Home, Technology ,Project} from "./Page";

const App = () => {
  return (
    <div className=" relative">
      <Navbar />
      <Home />
      <AboutMe />
      <Technology/>
      <Project/>
    </div>
  );
};

export default App;
