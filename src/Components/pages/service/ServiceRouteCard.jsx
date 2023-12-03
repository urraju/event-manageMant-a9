import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const ServiceRouteCard = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch("/event.json")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  return (
    <div data-aos="fade-left">
      <div className="w-9/12 mx-auto  text-center mt-20">
        <h1 className=" text-3xl md:text-5xl lg:text-5xl font-bebas text-gray-500 mb-3">
          The <span className="text-rose-500">Event Management</span>{" "}
          Specialists
        </h1>
        <p className="text-lg text-gray-500 font-semibold ">
          From Wedding Functions to Gaming Parties or Corporate Events to
          Musical Functions, <br /> We offer full range of Events Management
          Services <br /> that scale to your needs & budget.
        </p>
      </div>
      <div
        data-aos="fade-down-right"
        className="grid grid-cols-1 w-9/12 mx-auto gap-5 items-center justify-center md:grid-cols-2 lg:grid-cols-2 mt-24"
      >
        {service.map((item) => (
          <div>
            <div className="p-8 border-l-4 rounded-lg shadow-lg border-rose-500">
              <div className="flex items-center gap-5">
                <img
                  className="w-14 p-2 rounded-full h-14 bg-gray-100 shadow-lg border border-rose-500"
                  src={item.icon}
                  alt=""
                />
                <p className=" text-xl md:text-2xl lg:text-2xl font-bold font-montserrat  ">
                  {item.name}
                </p>
              </div>
              <p className="mt-6">{item.des}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceRouteCard;
