import React, { createContext, useRef, useState } from "react";

export const Colect = createContext();

const Collection = ({ children }) => {
  const homeRef = useRef();
  const aboutmeRef = useRef();
  const techRef = useRef();
  const projectRef = useRef();
  const contactRef = useRef();

  const handleScroll = (element) => {
    element == techRef
      ? window.scrollTo({
          top: element.current.offsetTop - 200,
          behavior: "smooth",
        })
      : window.scrollTo({
          top: element.current.offsetTop,
          behavior: "smooth",
        });
  };
  const [showMenu, setShowMenu] = useState(false);
  const handleShow = () => {
    setShowMenu(!showMenu);
  };
  const [nav, setNav] = useState([
    {
      ref: homeRef,
      name: "Home",
      con: true,
    },
    {
      ref: aboutmeRef,
      name: "About Me",
      con: false,
    },
    {
      ref: techRef,
      name: "Skills",
      con: false,
    },
    {
      ref: projectRef,
      name: "Projects",
      con: false,
    },
    {
      ref: contactRef,
      name: "Contact me!",
      con: false,
    },
  ]);
  const handleCheck = (i) => {
    setNav(
      nav.map((ea, num) =>
        num == i ? { ...ea, con: true } : { ...ea, con: false }
      )
    );
  };
  const value = {
    homeRef,
    aboutmeRef,
    techRef,
    projectRef,
    contactRef,
    showMenu,
    nav,
    handleCheck,
    handleShow,
    handleScroll,
  };
  return <Colect.Provider value={value}>{children}</Colect.Provider>;
};

export default Collection;
