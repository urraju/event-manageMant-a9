import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Banner from "../Banner/Banner";
import ServiceCard from "./ServiceCard";
import { useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import ServiceRouteCard from "./service/ServiceRouteCard";
import Contact2 from "./contact/Contact2";
import EventCard from "../Event/EventCard";
const Home = () => {
  const data = useLoaderData();
  return (
    <div className="my-5">
      <Navbar />
      <Banner />

      <div className=" md:mt-0 mt-0 lg:mt-44 ">
        <h1 className="text-5xl font-bebas mb-20 text-center text-black">
          Our services
        </h1>
        <div className="grid gap-6 w-9/12 mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {data.map((item) => (
            <ServiceCard key={item.id} data={item} />
          ))}
        </div>
      </div>

      <ServiceRouteCard />
      <EventCard />
      <Contact2 />
      <Footer />
    </div>
  );
};

export default Home;
