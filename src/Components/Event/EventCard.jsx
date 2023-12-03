import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import event1 from "../../assets/eventimg/gamin1.webp";
import event2 from "../../assets/eventimg//gamin2.jpeg";

import event5 from "../../assets/eventimg/gaming5.jpg";
import event6 from "../../assets/eventimg/gaming6.jpg";
import event7 from "../../assets/eventimg/gamaing7.jpg";
import event9 from "../../assets/eventimg/gaming9.jpg";
const EventCard = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  return (
    <div data-aos="zoom-in" className="w-9/12 mx-auto mt-16">
      <div className="text-center">
        <h1 className=" text-2xl md:text-4xl lg:text-4xl font-roboto font-bold first-letter:text-6xl first-letter:text-rose-500 uppercase mb-3">
          Our event simble
        </h1>
        <p className="font-roboto font-light text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
          illo non! Totam, <br /> omnis eaque earum fuga voluptatibus aperiam
          natus nulla?
        </p>
      </div>
      <div className="carousel carousel-end gap-4 mt-7 justify-center flex-wrap">
        <div className="carousel-item w-72 h-80">
          <img
            className="rounded-xl hover:animate-pulse"
            src={event1}
            alt="Drink"
          />
        </div>
        <div className="carousel-item  hover:scale-15  w-72 h-80">
          <img
            className="rounded-xl hover:animate-pulse "
            src={event2}
            alt="Drink"
          />
        </div>

        <div className="carousel-item  w-72 h-80">
          <img
            className="rounded-xl hover:animate-pulse"
            src={event5}
            alt="Drink"
          />
        </div>
        <div className="carousel-item  w-72 h-80">
          <img
            className="rounded-xl hover:animate-pulse"
            src={event6}
            alt="Drink"
          />
        </div>
        <div className="carousel-item  w-72 h-80">
          <img
            className="rounded-xl hover:animate-pulse"
            src={event7}
            alt="Drink"
          />
        </div>

        <div className="carousel-item  w-72 h-80">
          <img
            className="rounded-xl hover:animate-pulse"
            src={event9}
            alt="Drink"
          />
        </div>
      </div>
    </div>
  );
};

export default EventCard;
