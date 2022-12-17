import React, { useContext, useState } from "react";
import { HiArrowRight } from "react-icons/hi";
import { BsCodeSlash } from "react-icons/bs";
import ecommerce from "../assets/project/ecommerce.png";
import eduport from "../assets/project/eduport.png";
import crypto from "../assets/project/tst.png";
import { Colect } from "../store/Collection";
const Project = () => {
  const [cardDatail, setCardDetail] = useState([
    {
      id: 1,
      image: ecommerce,
      title: "Ecommerce Project",
      info: "Manage website appearance, as well as manage the state globally using Contact API.",
      live: "https://shop-mine.netlify.app",
      gitLink: "https://github.com/lwinmin-12/e-commerce",
    },
    {
      id: 2,
      image: crypto,
      title: "Crypto Currency Exchange",
      info: "Using coingecko Api and manage the state globally using reduxtool",
      live: "https://shop-mine.netlify.app",
      gitLink: "https://github.com/lwinmin-12/e-commerce",
    },
    {
      id: 3,
      image: eduport,
      title: "Ecommerce Project",
      info: "Manage website appearance, as well as manage the state globally using Contact API.",
      live: "https://eduport-12.netlify.app",
      gitLink: "https://eduport-12.netlify.app",
    },
  ]);
  const {projectRef} = useContext(Colect)
  return (
    <div ref={projectRef} className="w-full bg-gray-50 ">
      <div className="w-[80%] mx-auto py-24 flex flex-col justify-center items-center  space-x-5 ">
        <div className="mb-20">
          <h1 className="text-[22px] border-b-2 border-green-500 pb-3">
            Featured Project
          </h1>
        </div>
        <div className="flex justify-center space-x-7 !mx-0">
          {cardDatail.map((ea) => (
            <div
              key={ea.id}
              class="max-w-sm bg-white border overflow-hidden border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
            >
              <img
                class="rounded-t-lg duration-500 hover:scale-[1.1]"
                src={ea.image}
                alt=""
              />
              <div class="p-5 space-y-5">
                <a href="#">
                  <h5 class="mb-2 text-[22px] font-medium tracking-tight text-gray-900 dark:text-white">
                    {ea.title}
                  </h5>
                </a>
                <p class="mb-3 text-[15px] font-normal text-gray-700 dark:text-gray-400">
                  {ea.info}
                </p>
                <div className="flex space-x-5">
                  <a href={ea.live} class="btn px-3 py-2 text-sm !space-x-2">
                    <span>Live Preview</span>
                    <HiArrowRight className="text-base" />
                  </a>
                  <a
                    href={ea.gitLink}
                    class="OBtn px-3 py-2 text-sm flex justify-center items-center space-x-2"
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
