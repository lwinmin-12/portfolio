import React, { useContext } from "react";
import { MoblieMenu, Navbar } from "./component";
import { AboutMe, Home, Skill, Project, Contact, Footer } from "./Page";
import { Colect } from "./store/Collection";
const App = () => {
  const { showMenu } = useContext(Colect);
  console.log(showMenu);
  return (
    <div className="overflow-hidden relative">
      <Navbar />
       {
        showMenu && <MoblieMenu/>
       }
      <Home />
      <AboutMe />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </div>
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
