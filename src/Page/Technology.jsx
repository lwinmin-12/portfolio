import React, { useContext, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

import htmlLogo from "../assets/tech/html.png";
import cssLogo from "../assets/tech/css.png";
import jsLogo from "../assets/tech/js.png";
import bootstrapLogo from "../assets/tech/bootstrap.png";
import sassLogo from "../assets/tech/sass.png";
import tailwindLogo from "../assets/tech/tailwind.jpg";
// import flowbiteLogo from "../assets/tech/flowbite.png";
import reactLogo from "../assets/tech/React-icon.svg";
import gitLogo from "../assets/tech/git.svg";
import githubLogo from "../assets/tech/github.png";
import figmaLogo from "../assets/tech/figma.png";
import { Colect } from "../store/Collection";

const Technology = () => {
  const [logo, setLogo] = useState([
    htmlLogo,
    cssLogo,
    jsLogo,
    bootstrapLogo,
    sassLogo,
    tailwindLogo,
    reactLogo,
    gitLogo,
    githubLogo,
    figmaLogo,
  ]);
  const { techRef } = useContext(Colect);

  return (
    <div
      ref={techRef}
      className="w-[80%] mx-auto py-5 flex justify-center items-center"
    >
      <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={6}
        loop={true}
        autoplay={{
          delay: 2000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
      >
        {logo.map((ea, index) => {
          return (
            <SwiperSlide key={index}>
              <img className="w-full m-auto" src={ea} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Technology;

 // setNav(
    //   nav.map((ea, num) =>
    //     num == i ? { ...ea, con: true } : { ...ea, con: false }
    //   )
    // );