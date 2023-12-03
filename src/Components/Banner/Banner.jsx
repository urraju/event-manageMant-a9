import React, { useEffect } from "react";
import bannerImg from "../../assets/bannenr.png";
import AOS from "aos";
import "aos/dist/aos.css";
const Banner = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  return (
    <div className="w-full">
      <div className="bg-backgroud bg-cover h-[600px]  lg:h-[850px] w-full bg-no-repeat absolute -z-40 top-0"></div>
      <div className="w-full h-[600px] lg:h-[850px] bg-black opacity-60 absolute top-0 -z-40"></div>
      <div className=" mt-12 md:mt-0 lg:mt-0 flex-col-reverse md:flex lg:flex-row  items-center w-9/12 h-[600px] lg:h-[600px]  mx-auto justify-between">
        <div
          data-aos="fade-right"
          className="text-white mb-0 md:mb-52  lg:mb-0"
        >
          <p className=" text-3xl lg:text-6xl md:text-6xl font-bebas  tracking-wider ">
            Your Gateway to Gaming Experiences
          </p>
          <p className=" md:text-xl lg:text-lg mt-3 ">
            Embark on a journey of epic proportions as you conquer the gaming
            event <br /> management world. Plan, strategize, and host the
            ultimate <br /> gaming events that leave a mark in the industry.
          </p>
          <button className="bg-rose-500 mb-5 rounded px-5 py-2 mt-5">
            Learn More
          </button>
        </div>
        <div data-aos="fade-left">
          <img
            className="w-full hidden md:hidden lg:block lg:w-[650px]"
            src={bannerImg}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
