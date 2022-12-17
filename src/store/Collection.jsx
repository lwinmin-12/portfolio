import React, { createContext, useRef } from "react";

export const Colect = createContext();

const Collection = ({ children }) => {
  const homeRef = useRef();
  const aboutmeRef = useRef();
  const techRef = useRef();
  const projectRef = useRef();
  const contactRef = useRef();

  const handleScroll = (element) => {
    console.log(element);
    window.scrollTo({
      top: element.current.offsetTop,
      behavior: "smooth"
    });
  };
  const value = {
    homeRef,
    aboutmeRef,
    techRef,
    projectRef,
    contactRef,
    handleScroll,
  };
  return <Colect.Provider value={value}>{children}</Colect.Provider>;
};

export default Collection;
