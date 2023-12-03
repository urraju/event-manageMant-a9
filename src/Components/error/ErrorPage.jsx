import React from "react";
import Error from "../../assets/notFound.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
const ErrorPage = () => {
  return (
    <div className="w-full p-8 mt-10 mx-auto lg:w-5/12 md:w-7/12">
      <img className="mx-auto" src={Error} alt="" />
      <Link to="/">
        <button className="   w-full uppercase py-1 px-5 flex items-center font-roboto justify-center gap-2 rounded">
          Go Home <BsArrowRight className="   text-xl" />{" "}
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
