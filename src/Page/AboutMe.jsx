import React, { useContext, useState, useEffect } from "react";
import Lottie from "lottie-react";
import AboutHi from "../Animation/AboutHi.json";
import { Colect } from "../store/Collection";
import cvForm from "../assets/Cv/lmo.pdf";
//waypoint
import { Waypoint } from "react-waypoint";

const AboutMe = () => {
  const [aboutContact, setAboutContact] = useState([
    {
      id: 1,
      head: "Who am i ?",
      contact: `I'm Lwin Min Oo, 21 years old. I started learning programming at
      end of 2021. At first it was just a hobby. Then, I kept digging
      deeper and deeper through the weeds of programming and I knew that
      it's my destiny to make a career in programming. My goal is to
      become a fullstack developer in web development.`,
    },
    {
      id: 2,
      head: "Education.",
      contact: `I am a third-year physics student at Yadanabon University I
      dropped out of Yadanarbon University in early 2021. And then I
      attended courses at MMS IT and entered the web development field.`,
    },
    {
      id: 3,
      head: "Work Experience.",
      contact: `I had studied and made practiced consistently for about 6 months as a frontend developer. And I created dynamic web pages and web apps collaborating with another backend development team.`,
    },
  ]);
  const { aboutmeRef ,handleCheck } = useContext(Colect);
  return (
    <div
      ref={aboutmeRef}
      className=" lg:w-[80%] w-[90%] xl:w-[1320px]  flex flex-col justify-center mx-auto lg:h-[100vh]"
    >
      <Waypoint onEnter={() => handleCheck(1)} />
      <div
        // data-aos="fade-up"
        className="mx-auto lg:w-[15%] w-[35%] text-center"
      >
        <h1 className="text-[22px] border-b-2 border-green-500 pb-3 font-bold lg:mb-10">
          About Me
        </h1>
        {/* <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur</p> */}
      </div>
      <div className=" flex flex-col lg:flex-row justify-center">
        <div
          data-aos="fade-right"
          className="lg:w-[50%] w-full flex justify-center items-center"
        >
          <Lottie
            className="w-full"
            animationData={AboutHi}
            loop={true}
            autoPlay={true}
          />
        </div>
        <div className="lg:w-[50%] my-8 flex flex-col justify-center space-y-6 ">
          <div data-aos="fade-left" className="space-y-1">
            <h3 className="text-[30px] text-green-500">Who am i?</h3>
            <p className="text-[14px] text-gray-500">
              I'm Lwin Min Oo, 21 years old. I started learning programming at
              the end of 2021. At first, it was just a hobby. Then, I kept
              digging deeper and deeper through the weeds of programming and
              knew that it was my destiny to make a career in programming. My
              goal is to become a full-stack developer in web development.
            </p>
          </div>
          <div data-aos="fade-left" className="space-y-1">
            <h3 className="text-[30px] text-green-500">Education</h3>
            <p className="text-[14px] text-gray-500">
              I am a third-year physics student at Yadanabon University and
              dropped out of Yadanarbon University in early 2021. And then, I
              attended courses at MMS IT and entered the web development field.
            </p>
          </div>
          <div data-aos="fade-left" className="space-y-1">
            <h3 className="text-[30px] text-green-500">Work Experience</h3>
            <p className="text-[14px] text-gray-500">
              I have studied and made practiced consistently for about six
              months as a frontend developer. I created dynamic web pages and
              apps and collaborated with another backend development team.
            </p>
          </div>
          <div data-aos="fade-left" className="flex space-x-4 py-5 text-sm">
            <a
              href="https://drive.google.com/drive/folders/1y_IL7krTUqfYW04g94QGBrBT_0UUHE0U?usp=sharing"
              className="btn px-5 py-2.5"
            >
              View Certificate
            </a>
            <a href={cvForm} className="OBtn px-5 py-2.5" download>
              download Cv
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
