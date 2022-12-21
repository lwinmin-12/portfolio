import React, { useContext, useState } from "react";
import { HiArrowRight } from "react-icons/hi";
import { BsCodeSlash } from "react-icons/bs";
import ecommerce from "../assets/project/ecommerce.png";
import eduport from "../assets/project/eduport.png";
import crypto from "../assets/project/tst.png";
import { Colect } from "../store/Collection";
//waypoint
import { Waypoint } from "react-waypoint";

const Project = () => {
  const [cardDatail, setCardDetail] = useState([
    {
      id: 1,
      image: ecommerce,
      title: "Ecommerce Project",
      info: "Manage website appearance, as well as manage the state globally using Contact API.",
      live: "https://lmo-ecommerce.netlify.app/",
      gitLink: "https://github.com/lwinmin-12/e-commerce",
    },
    {
      id: 2,
      image: crypto,
      title: "Crypto Currency Exchange",
      info: "Using coingecko Api and manage the state globally using reduxtool",
      live: "https://crypto-currency-exchange.netlify.app/",
      gitLink: "https://github.com/lwinmin-12/crypto.git",
    },
    {
      id: 3,
      image: eduport,
      title: "Bootstrap Premium Themes",
      info: "Responsive and better clone bootstrap premium theme using Tailwind and React.",
      live: "https://eduport-12.netlify.app",
      gitLink: "https://eduport-12.netlify.app",
    },
  ]);
  const { projectRef, handleCheck } = useContext(Colect);
  return (
    <div ref={projectRef} className="w-full bg-gray-50 ">
      <div className="lg:w-[80%] w-[90%] 2xl:w-[1320px] mx-auto py-24 flex flex-col justify-center items-center  space-x-5 ">
        <div className="lg:mb-20 mb-10">
          <h1 className="text-[22px] border-b-2 border-green-500 pb-3">
            Featured Project
          </h1>
        </div>
        <Waypoint onEnter={() => handleCheck(3)} />

        <div className="flex flex-wrap justify-center w-full !mx-0">
          {cardDatail.map((ea) => (
            <div
              key={ea.id}
              data-aos="flip-left"
              className="w-[400px] sm:w-[350px] mx-2 lg:mx-6 mb-2 group bg-white border overflow-hidden border-gray-200 rounded-lg shadow-md"
            >
              <img
                className="rounded-t-lg duration-500 group-hover:scale-[1.1] "
                src={ea.image}
                alt=""
              />
              <div className="p-5 space-y-5">
                <a href="#">
                  <h5 className="mb-2 text-[22px] font-medium tracking-tight text-gray-900">
                    {ea.title}
                  </h5>
                </a>
                <p className="mb-3 text-[15px] font-normal text-gray-700">
                  {ea.info}
                </p>
                <div className="flex space-x-5">
                  <a
                    href={ea.live}
                    className="btn px-3 py-2 text-sm !space-x-2"
                  >
                    <span>Live Preview</span>
                    <HiArrowRight className="text-base" />
                  </a>
                  <a
                    href={ea.gitLink}
                    className="OBtn px-3 py-2 text-sm flex justify-center items-center space-x-2 after:bottom-[60px] sm:after:bottom-[45px]"
                  >
                    <span> View Code</span>
                    <BsCodeSlash className="text-base" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
