import React from "react";
import logo from "../assets/logo/lmo-w.svg";
const Footer = () => {
  return (
    <div className="w-full bg-green-100">
      <div className="  flex flex-col lg:flex-row lg:w-[80%] w-[90%] 2xl:w-[1320px] mx-auto py-3 space-y-3 items-center  justify-between text-slate-700">
        <div className="flex flex-col lg:flex-row items-center space-y-3 lg:space-y-0 lg:space-x-5">
          <img src={logo} className="w-[20%] rounded" alt="" />
          <p className="text-center">Terms & Conditions / Privacy Policy</p>
        </div>
        <p className="text-center lg:text-left">
          Copyright @2022 All right reserved | Design and Develope by{" "}
          <span className="text-black">Lwin Min Oo.</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
