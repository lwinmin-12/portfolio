import React from "react";
import { Navbar } from "./component";
import { AboutMe, Home } from "./Page";

const App = () => {
  return (
    <div className="w-[80%] mx-auto relative">
      <Navbar />
      <Home />
      <AboutMe/>
    </div>
  );
};

export default App;
