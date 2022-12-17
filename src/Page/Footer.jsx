import React from "react";
import logo from "../assets/logo/lmo-w.svg";
const Footer = () => {
  return (
    <div className="w-full bg-green-100">
      <div className="  flex w-[80%] mx-auto py-3  items-center  justify-between text-slate-700">
        <div className="flex items-center space-x-5">
          <img src={logo} className="w-[20%] rounded" alt="" />
          <p>Terms & Conditions / Privacy Policy</p>
        </div>
        <p>
          Copyright @2022 All right reserved | Design and Develope by{" "}
          <span className="text-black">Lwin Min Oo.</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
