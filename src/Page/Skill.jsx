import React, { useContext, useState } from "react";
import { Colect } from "../store/Collection";

const Skill = () => {
  const { techRef } = useContext(Colect);
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
  return (
    <div
      ref={techRef}
      className="w-[80%]  bg-green-100 mx-auto py-10 flex flex-col justify-center items-center"
    >
      <h1 className="text-[22px] border-b-2 border-green-500 pb-3 ">
        What I do
      </h1>
      <p className="w-[40%] text-center text-gray-500 mt-5 mb-10">
        I have completed a six-month internship as a front-end developer at
        Local Base It Company.
      </p>
      <div className="w-full flex-wrap flex justify-evenly ">
        {skill.map((ea) => (
          <div key={ea.id} className="w-[40%] my-5 ">
            <div className="flex justify-between mb-1">
              <span className="text-base font-medium text-black dark:text-white">
                {ea.name}
              </span>
              <span className="text-sm font-medium text-black dark:text-white">
                {ea.per}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className={`bg-green-500 h-2.5 rounded-full ${ea.class} `}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
