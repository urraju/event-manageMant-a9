import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
const ServiceCard = ({ data }) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  const { id, img, name, description, price } = data;
  return (
    <div>
      <div
        data-aos="fade-right"
        className=" md:h-[475px] lg:h-[480px] border-cyan-400 flex flex-col bg-gray-100 rounded-lg shadow-lg p-1"
      >
        <div className="flex-grow">
          <img className="rounded-t-lg mb-3 " src={img} alt="" />
          <p className="text-xl px-1 font-roboto font-bold">{name}</p>
          <p className="font-light font-roboto mt-2 border-l rounded-l px-1 border-cyan-400">
            {description.slice(0, 150)}
          </p>
          <div className="flex flex-grow">
            <p className="text-xl mt-2 px-1  font-montserrat font-light">
              ${price}
            </p>
          </div>
        </div>

        <div className="">
          <NavLink to={`/servicedetails/${id}`}>
            <button className="py-1 flex items-center justify-center gap-2 rounded-lg  mt-3  border-b border-cyan-400 w-full text-black px-5 ">
              View Details <BsArrowRight className="text-cyan-500" />{" "}
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
