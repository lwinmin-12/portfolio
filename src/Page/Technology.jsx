import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";

import htmlLogo from "../assets/tech/html.png";
import cssLogo from "../assets/tech/css.png";
import jsLogo from "../assets/tech/js.png";
import bootstrapLogo from "../assets/tech/bootstrap.png";
import sassLogo from "../assets/tech/sass.png";
import tailwindLogo from "../assets/tech/tailwind.jpg";
import flowbiteLogo from "../assets/tech/flowbite.png";
import reactLogo from "../assets/tech/React-icon.svg";
import gitLogo from "../assets/tech/git.svg";
import githubLogo from "../assets/tech/github.png";
import figmaLogo from "../assets/tech/figma.png";
const Technology = () => {
  const [logo, setLogo] = useState([
    htmlLogo,
    cssLogo,
    jsLogo,
    bootstrapLogo,
    sassLogo,
    tailwindLogo,
    flowbiteLogo,
    reactLogo,
    gitLogo,
    githubLogo,
    figmaLogo,
  ]);

  return (
    <div className="w-[80%] mx-auto py-5 flex justify-center items-center">
      <Swiper
        spaceBetween={50}
        slidesPerView={6}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        loop={true}
        Autoplay={true}
      >
        {logo.map((ea) => {
          return (
            <SwiperSlide>
              <img className="w-full m-auto" src={ea} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Technology;
