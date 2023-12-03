import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className=" bg-black">
      <footer className="p-8 bg-footerBackgroud text-base-content">
        <div className="flex items-center justify-between text-white w-9/12 mx-auto">
          <h1 className="font-bebas text-2xl md:text-3xl lg:text-4xl border-b border-gray-400 py-2 tracking-wider first-letter:text-5xl first-letter:text-rose-500 ">
            Start Planning Your Event Today !
          </h1>
          <Link to="/contact">
            <button className="bg-white h-12 w-12 rounded-full flex items-center text-rose-500 gap-2 justify-center text-xl text-bold font-roboto">
              {" "}
              <BsArrowRight />{" "}
            </button>
          </Link>
        </div>
        <div className="  md:w-9/12 lg:w-9/12 mx-auto grid-cols-2 w-full footer p-10 text-white ">
          <nav>
            <header className="footer-title">Services</header>
            <a className="link link-hover">Gaming</a>
            <a className="link link-hover">Teaming</a>
            <a className="link link-hover">Confarance</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <header className="footer-title">Company</header>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Adding Skill</a>
            <a className="link link-hover">Not One</a>
          </nav>

          <nav>
            <header className="footer-title">Follow US</header>
            <h1 className="text-xl mb-2 uppercase">Our social link</h1>
            <div className="grid grid-flow-col text-2xl gap-4">
              <FaFacebook />
              <FaInstagram />
              <FaTwitter />
              <FaLinkedin />
              <FaYoutube />
            </div>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
