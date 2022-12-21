import React, { useContext, useState } from "react";
import { Colect } from "../store/Collection";
import logo from "../assets/logo/lmo-w.svg";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const { handleScroll, handleShow, nav, handleCheck } =
    useContext(Colect);
  return (
    <div className="bg-white w-full z-[50] fixed top-0">
      <div className="lg:w-[80%] 2xl:w-[1320px] w-[90%] left-0 right-0 mx-auto  flex justify-between items-center py-4">
        <div className="w-[15%] flex items-center">
          <img src={logo} alt="" />
        </div>
        <ul className=" hidden sm:flex w-[70%] md:w-[45%] justify-between items-center text-sm">
          {nav.map((ea, index) =>
            ea.name != "Contact me!" ? (
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
                className=" px-5 py-2.5 btn cursor-pointer"
              >
                {ea.name}
              </li>
            )
          )}
        </ul>
        <div
          onClick={handleShow}
          className="sm:hidden flex text-xl active:text-gray-500"
        >
          <AiOutlineMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
