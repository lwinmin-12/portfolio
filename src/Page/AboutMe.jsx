import React, { useState } from "react";
import Lottie from "lottie-react";
import AboutHi from "../Animation/AboutHi.json";
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
      contact: `I am a third-year physics student at Yadanabon University I
      dropped out of Yadanarbon University in early 2021. And then I
      attended courses at MMS IT and entered the web development field.`,
    },
  ]);
  return (
    <div className=" flex flex-col justify-center">
      <div className="mx-auto w-[15%] text-center">
        <h1 className="text-[22px] border-b-2 py-3 font-bold my-10">
          About Me
        </h1>
        {/* <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur</p> */}
      </div>
      <div className=" flex justify-center">
        <div className="w-[50%]  flex justify-center items-center">
          <Lottie
            className="w-full bg-white"
            animationData={AboutHi}
            loop={true}
            autoPlay={true}
          />
        </div>
        <div className="w-[50%] bg-white flex flex-col justify-center space-y-6 ">
          <div className="space-y-1">
            <h3 className="text-[30px] text-green-500">Who am i?</h3>
            <p className="text-[14px] text-gray-500">
              I'm Lwin Min Oo, 21 years old. I started learning programming at
              end of 2021. At first it was just a hobby. Then, I kept digging
              deeper and deeper through the weeds of programming and I knew that
              it's my destiny to make a career in programming. My goal is to
              become a fullstack developer in web development.
            </p>
          </div>
          <div className="space-y-1">
            <h3 className="text-[30px] text-green-500">Education</h3>
            <p className="text-[14px] text-gray-500">
              I am a third-year physics student at Yadanabon University I
              dropped out of Yadanarbon University in early 2021. And then I
              attended courses at MMS IT and entered the web development field.
            </p>
          </div>
          <div className="space-y-1">
            <h3 className="text-[30px] text-green-500">Work Experience</h3>
            <p className="text-[14px] text-gray-500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est
              corporis nam dicta fuga alias ullam illum possimus modi odio esse,
              sapiente veritatis ipsum reprehenderit aspernatur architecto
              voluptatum explicabo delectus libero.
            </p>
          </div>
          <div className="flex space-x-4 py-5 text-sm">
            <button className="btn px-6 py-2">View Certificate</button>
            <button className="OBtn">download Cv</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
