import React, { useContext, useState, useEffect } from "react";
import { Colect } from "../store/Collection";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
//waypoint
import { Waypoint } from "react-waypoint";
//counterup
import CountUp from "react-countup";

const Skill = () => {
  const [condition, setCondition] = useState(false);

  const { techRef, handleCheck } = useContext(Colect);
  const [skill, setSkill] = useState([
    {
      id: 1,
      name: "HTML / CSS",
      per: 90,
      class: "w-[90%]",
    },
    {
      id: 2,
      name: "JavaScript",
      per: 75,
      class: "w-[75%]",
    },
    {
      id: 3,
      name: "Bootstrap / Tailwind / SASS",
      per: 85,
      class: "w-[85%]",
    },
    {
      id: 4,
      name: "React / Redux /Redux-Toolkit",
      per: 70,
      class: "w-[70%]",
    },
    {
      id: 5,
      name: "Git / Github",
      per: 80,
      class: "w-[80%]",
    },
    {
      id: 6,
      name: "Figma / Photoshop / illustrator",
      per: 60,
      class: "w-[60%]",
    },
  ]);
  useEffect(() => {
    AOS.init({
      duration: 900,
    });
  }, []);
  return (
    <div className=" bg-green-100 w-full py-10">
      <div
      ref={techRef}
      className="lg:w-[80%] w-[90%] 2xl:w-[1320px] mx-auto  flex flex-col justify-center items-center"
    >
      <h1
        data-aos="fade-up"
        className="text-[22px] border-b-2 border-green-500 pb-3 "
      >
        What I do
      </h1>
      <p
        data-aos="fade-up"
        className="md:w-[40%] w-[60%] text-center text-gray-500 mt-5 mb-10"
      >
        I have completed a six-month internship as a front-end developer at
        Local Base IT Company.
      </p>
      {/* <Waypoint onEnter={() => } /> */}

      <Waypoint
        onEnter={() => {
          setCondition(true), handleCheck(2);
        }}
        onLeave={() => setCondition(false)}
      />
      <div className="w-full flex-wrap flex justify-evenly ">
        {skill.map((ea) => (
          <div key={ea.id} className="md:w-[40%] w-[90%] my-5 ">
            <div className="flex justify-between mb-1">
              <span className="text-base font-medium text-black">
                {ea.name}
              </span>
              <span className="text-sm font-medium text-black ">
                {condition ? <CountUp end={ea.per} duration={1} /> : "0"}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className={`bg-green-500 h-2.5 duration-1000 rounded-full ${
                  condition ? ea.class : "w-[0%]"
                } `}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Skill;
