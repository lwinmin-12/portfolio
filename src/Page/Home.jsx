import React from "react";
import Lottie from "lottie-react";
import HomeAnimation from "../Animation/HomeAnimation.json";
import { SlMouse } from "react-icons/sl";
import { BiChevronsDown } from "react-icons/bi";
import Typed from "react-typed";

const Home = () => {
  return (
    <>
      <div className=" flex relative justify-between h-[100vh]">
        <div className="w-[50%] flex items-center">
          <div className=" w-[100%]">
            <div className="mb-4">
              <h1 className="text-[35px]">Hello I'm</h1>
              <Typed
                className="text-[56px] text-green-500"
                strings={[
                  "Lwin Min Oo...",
                  "Frontend Developer.",
                  "Ui,Ux Desinger",
                ]}
                typeSpeed={50}
                backSpeed={30}
                loop
              />
            </div>
            <div className="space-y-7 w-[90%]">
              <div className="text-gray-500">
                <p>
                  I'm a Frontend Developer and Ui,Ux Desinger from Mandalay but
                  currently base in Yangon Myanmar.I create custom websites to
                  help businesses do better online. Welcome to my corner of the
                  internet.I'm glade you're here!
                </p>
                <p></p>
              </div>
              <button className="btn px-5 py-2.5">Contact me!</button>
            </div>
          </div>
        </div>
        <div className="w-[50%] flex justify-center items-center">
          <Lottie animationData={HomeAnimation} loop={true} autoPlay={true} />
        </div>
        <div className="w-full absolute bottom-0 flex justify-center">
          <div className="ani hover:text-green-500">
            <SlMouse className="text-2xl" />
            <BiChevronsDown className="text-2xl" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
