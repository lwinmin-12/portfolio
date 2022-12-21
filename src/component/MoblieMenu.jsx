import React, { useContext } from "react";
import { Colect } from "../store/Collection";
import { MdClose } from "react-icons/md";

const MoblieMenu = () => {
  const { handleScroll, handleShow, nav, handleCheck } = useContext(Colect);

  return (
    <div className="md:hidden w-[100vw] h-[100vh] !z-50 fixed">
      <div onClick={handleShow} className="opacity-30 bg-slate-800  w-full h-full "></div>
      <div
        data-aos="fade-left"
        className="bg-white !duration-150 absolute top-0 right-0 w-[50%] h-full"
      >
        <ul className="space-y-3">
          <div className="p-3">
            <MdClose onClick={handleShow} className="text-xl" />
          </div>
          {nav.map((ea, index) =>
            ea.name != "Contact me!" ? (
              <li
                onClick={() => {
                  handleScroll(ea.ref), handleCheck(index), handleShow();
                }}
                className={`${
                  ea.con && "text-green-500"
                } w-[90%] mx-auto rounded text-center py-3 border cursor-pointer`}
              >
                {ea.name}
              </li>
            ) : (
              <li
                onClick={() => {
                  handleScroll(ea.ref), handleCheck(index), handleShow();
                }}
                className=" w-[90%] h-[40px] mx-auto btn cursor-pointer"
              >
                {ea.name}
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default MoblieMenu;
