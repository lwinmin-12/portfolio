import React from "react";

const Navbar = () => {
  return (
    <div className="w-[80%] bg-white z-[50] fixed top-0 flex justify-between items-center py-4">
      <div>Logo</div>
      <ul className="flex w-[50%] justify-between items-center text-sm">
        <li className="text-green-500">Home</li>
        <li>About Me</li>
        <li>Technology</li>
        <li>Project</li>
        <li className=" w-[100px] h-[40px] btn">
          <a href="" className="">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
