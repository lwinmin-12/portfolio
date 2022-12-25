import React, { useContext, useEffect } from "react";
import Lottie from "lottie-react";
import HomeAnimation from "../Animation/HomeAnimation.json";
import { SlMouse } from "react-icons/sl";
import { BiChevronsDown } from "react-icons/bi";
import Typed from "react-typed";
import { Colect } from "../store/Collection";

// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
//waypoint
import { Waypoint } from "react-waypoint";

const Home = () => {
  const { homeRef } = useContext(Colect);
  const { handleScroll, contactRef, aboutmeRef, handleCheck } =
    useContext(Colect);
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);
  return (
    <>  
      <div
        ref={homeRef}
        className="w-[90%] lg:w-[80%] 2xl:w-[1320px] md:mt-0  mx-auto flex flex-col-reverse md:flex-row  relative justify-between md:h-[100vh]"
      >
        <div
          data-aos="fade-right"
          className="md:w-[50%] w-[100%] py-10 flex  items-center"
        >
          <div className=" w-[100%]">
            <div className="mb-4">
              <h1 className="text-[35px]">Hello I'm</h1>
              <Typed
                className="text-[56px]  text-green-500"
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
            <div className="space-y-7 w-full lg:w-[90%]">
              <div className="text-gray-500">
                <p>
                  I'm a Frontend Developer and Ui, Ux Designer from Mandalay and
                  currently based in Yangon, Myanmar. I have created custom
                  websites to help businesses to be better online. Welcome to my
                  corner of the internet. I'm glad you're here!
                </p>
                <p></p>
              </div>
              <button
                onClick={() => handleScroll(contactRef)}
                className="btn px-5 py-2.5"
              >
                Contact me! 
              </button>
            </div>
          </div>
        </div>
        <Waypoint onEnter={() => handleCheck(0)} />
        {/* photo */}
        <div
          data-aos="fade-left"
          className="md:w-[50%] w-[100%] flex justify-center items-center"
        >
          <Lottie animationData={HomeAnimation} loop={true} autoPlay={true} />
        </div>
      </div>
      <div className="w-full hidden lg:flex justify-center">
        <div
          onClick={() => handleScroll(aboutmeRef)}
          className="ani hover:text-green-500"
        >
          <SlMouse className="text-2xl" />
          <BiChevronsDown className="text-2xl" />
        </div>
      </div>
    </>
  );
};

export default Home;
