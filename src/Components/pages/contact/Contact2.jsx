import React, { useEffect } from "react";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { AiOutlineMail, AiFillMessage } from "react-icons/ai";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
const Contact2 = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  return (
    <div
      data-aos="zoom-in-up"
      className="bg-backgroud bg-cover w-full h-[930px] my-28 md:h-max lg:h-[650px] -z-0  rounded-xl md:w-9/12 lg:w-9/12 relative  mx-auto "
    >
      <div className="bg-cyan-900 -z-10 rounded-xl w-full h-full  absolute bg-opacity-90"></div>

      <div className="p-10">
        <div className="text-center text-white">
          <h1 className="text-4xl font-roboto uppercase mb-3 border-b border-rose-500 py-2 inline-block  ">
            Contact us
          </h1>
          <p className="font-montserrat  font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            molestias, <br /> sapiente error odit libero quod maiores illo sunt
            provident neque?
          </p>
        </div>

        <div className="flex mt-16 md:mt-0 lg:mt-0   items-center flex-col-reverse  md:flex-row lg:flex-row justify-around  h-[500px] ">
          <div className="flex z-30 flex-col gap-6">
            <div className="flex mt-5 items-center gap-3 text-white">
              <FaMapMarkerAlt className="text-cyan-500 p-2 border border-white   w-8 h-8 rounded-full" />
              <div className="font-roboto font-light">
                <h1>Addres</h1>
                <p className="hover:underline">
                  204 Dhaka Mymensingh Road 3000
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-white">
              <FaPhone className="text-cyan-500 p-2 border border-white   w-8 h-8 rounded-full" />
              <div className="font-roboto font-light">
                <h1>Phone</h1>
                <p className="hover:underline ">01824526072</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-white">
              <AiOutlineMail className="text-cyan-500 p-2 border border-white   w-8 h-8 rounded-full" />
              <div className="font-roboto font-light">
                <h1>Email</h1>
                <a className="hover:underline" href="#">
                  riadhasan680@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className="">
            <div className="backdrop-blur  mt-20 md:mt-0 lg:mt-0 p-7 flex z-30  justify-center items-center w-[350px] md:w-[400px] lg:w-[500px] bg-white/10 rounded-lg ">
              <div className="flex flex-col gap-2 w-64 md:w-80 lg:w-96">
                <p className="font-roboto text-white text-xl font-light border-b mb-6  w-32 py-1">
                  Message Me
                </p>
                <label className="text-white" htmlFor="name">
                  Name
                  <div className="flex gap-2">
                    <input
                      className="block  bg-transparent outline-none border-t w-full mt-2 px-3 py-1 border-cyan-500"
                      type="name"
                      name="name"
                    />
                    <MdDriveFileRenameOutline className="text-xl" />
                  </div>
                </label>
                <label className="text-white" htmlFor="name">
                  Email
                  <div className="flex gap-2">
                    <input
                      className="block mt-2 bg-transparent outline-none border-t w-full px-3 py-1 border-cyan-500"
                      type="name"
                      name="name"
                    />
                    <AiOutlineMail className="text-xl" />
                  </div>
                </label>
                <label className="text-white" htmlFor="name">
                  Type Your Message
                  <div className="flex gap-2">
                    <textarea
                      className="block mt-2 bg-transparent outline-none border-t px-3 py-1 border-cyan-500"
                      name=""
                      id=""
                      cols="40"
                      rows="2"
                    ></textarea>
                    <AiFillMessage className="text-xl" />
                  </div>
                </label>

                <button className=" uppercase flex items-center justify-center gap-2 text-white py-2 rounded shadow-xl mt-2">
                  Send me <BsArrowRight />{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact2;
