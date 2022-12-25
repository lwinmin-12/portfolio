import React from "react";
import { BsCheckCircle ,BsX } from "react-icons/bs";

const Toast = ({right , setSenting}) => {
  return (
    <div className={`fixed top-[100px] duration-300   shadow-lg flex items-center  border border-green-500 border-l-4 p-4 rounded-lg bg-white ${right}`}>
      <BsCheckCircle className="text-2xl text-green-500"/>
      <p className="mx-6">Email sent successfully.</p>
      <BsX onClick={()=>setSenting(false)} className="text-2xl ring-1 rounded-lg active:ring-2"/>
    </div>
  );
};

export default Toast;
