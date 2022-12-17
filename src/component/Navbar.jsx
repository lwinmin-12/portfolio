import React, { useContext, useState } from "react";
import { Colect } from "../store/Collection";
import logo from "../assets/logo/lmo-w.svg";

const Navbar = () => {
  const { handleScroll, homeRef, aboutmeRef, techRef, projectRef, contactRef } =
    useContext(Colect);
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
      name: "Technology",
      con: false,
    },
    {
      ref: projectRef,
      name: "Project",
      con: false,
    },
    {
      ref: contactRef,
      name: "Contact",
      con: false,
    },
  ]);
  const handleCheck = (i) => {
    console.log(i);
    setNav(
      nav.map((ea, num) =>
        num == i ? { ...ea, con: true } : { ...ea, con: false }
      )
    );
  };
  return (
    <div className="w-[80%] left-0 right-0 mx-auto bg-white z-[50] fixed top-0 flex justify-between items-center py-4">
      <div className="w-[15%] flex items-center">
        <img src={logo} alt="" />
      </div>
      <ul className="flex w-[50%] justify-between items-center text-sm">
        {nav.map((ea, index) =>
          ea.name != "Contact" ? (
            <li
              onClick={() => {
                handleScroll(ea.ref), handleCheck(index);
              }}
              className={`${ea.con && "text-green-500"} cursor-pointer`}
            >
              {ea.name}
            </li>
          ) : (
            <li
              onClick={() => {
                handleScroll(ea.ref), handleCheck(index);
              }}
              className=" w-[100px] h-[40px] btn cursor-pointer"
            >
              {ea.name}
            </li>
          )
        )}
        {/* <li
          onClick={() => handleScroll(contactRef)}
          className=" w-[100px] h-[40px] btn"
        >
          Contact
        </li> */}
      </ul>
    </div>
  );
};

export default Navbar;
