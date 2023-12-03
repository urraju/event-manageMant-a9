import React, { useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import Navbar2 from "../Navbar/Navbar2";
import AOS from "aos";
import "aos/dist/aos.css";
const ServiceDetails = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  const data = useLoaderData();
  const { id } = useParams();
  const inId = parseInt(id);
  const findData = data.find((item) => item.id === inId);
  const { img, name, description, details } = findData;
  const { date, location, special_challange, rules, team_play, leader_bords } =
    details[0];
  console.log(findData);

  return (
    <div>
      <Navbar2 />
      <div
        data-aos="fade-up-left"
        className=" w-full lg:w-7/12 md:w-9/12  mx-auto mt-10 my-10 bg-gray-100 rounded"
      >
        <h1 className="text-3xl first-letter:text-rose-500 first-letter:text-5xl font-roboto  px-7   inline-block rounded mt-4 ">
          All details About
        </h1>
        <div className="  font-roboto  rounded-xl space-y-3 p-5">
          <img className="rounded-xl mb-5 w-full" src={img} alt="" />
          <p className="text-xl  font-bold">
            {" "}
            <span className="text-2xl font-roboto font-bold">Name : </span>
            {name}
          </p>
          <p className="">
            {" "}
            <span className="text-xl  font-bold">Description : </span>
            {description}
          </p>
          <p>
            {" "}
            <span className="text-xl   font-bold">Date : </span>
            {date}
          </p>
          <p>
            {" "}
            <span className="text-xl   font-bold">Location : </span>
            {location}
          </p>
          <p>
            {" "}
            <span className="text-xl  font-bold">Rules : </span>
            {rules}
          </p>
          <p>
            {" "}
            <span className="text-xl  font-bold">Special Challange : </span>
            {special_challange}
          </p>
          <p>
            {" "}
            <span className="text-xl  font-bold">Team Play : </span>
            {team_play}
          </p>
          <p>
            {" "}
            <span className="text-xl  font-bold">Leader Bords : </span>
            {leader_bords}
          </p>

          <Link to="/">
            {" "}
            <button className="bg-success text-white flex items-center  shadow-xl rounded gap-1 px-4 mt-5 py-1">
              {" "}
              <AiOutlineArrowLeft /> All Event in this Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
