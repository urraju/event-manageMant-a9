import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ManageAuth from "../ManageAuth/ManageAuth";
import Navbar2 from "../Navbar/Navbar2";
import toast, { Toaster } from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";
const Resigter = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  const navigate = useNavigate();
  const { resigter, profile } = ManageAuth();

  const resigterHandler = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const userName = form.get("name");
    const email = form.get("email");
    const userPhoto = form.get("photo");
    const password = form.get("password");

    if (password.length < 6) {
      return toast.error("Password must be 6 characters!");
    }
    if (!/[A-Z]/.test(password)) {
      return toast.error("Password must be one uppercase!");
    }
    if (!/[@#$%^&+=!]/.test(password)) {
      return toast.error("Please put one special symbol!");
    }

    resigter ? toast.success("Register Successfull!") : "";

    resigter(email, password)
      .then((res) => {
        const user = res.user;
        profile({
          displayName: userName,
          photoURL: userPhoto,
        })
          .then((upRes) => {
            console.log("update profile");
          })
          .catch((err) => {
            console.log(err.message);
          });
        navigate("/");
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <div className="mt-16">
      <Toaster />
      <Navbar2 />
      <div
        data-aos="flip-left"
        className="flex w-full p-5  md:w-9/12 lg:w-9/12 mx-auto bg-backgroud rounded-xl bg-cover mt-10 bg-no-repeat md:h-[700px]  lg:h-[700px] items-center justify-center"
      >
        <div className=" backdrop-blur  bg-white/5 md:w-7/12 lg:w-7/12 p-8 py-10 flex items-center justify-center rounded border-r-2 border-t-2 border-success flex-col">
          <h1 className="text-3xl font-semibold mb-7 ">
            Register your account
          </h1>

          <form className="w-8/12" onSubmit={resigterHandler}>
            <input
              className="w-full text-white placeholder:text-white bg-transparent  px-2 py-2 rounded text-sm outline-none border mb-3"
              type="name"
              name="name"
              id=""
              placeholder="Enter Name"
              required
            />
            <input
              className="w-full text-white placeholder:text-white bg-transparent px-2 py-2 rounded text-sm outline-none border mb-3"
              name="photo"
              type="url"
              id=""
              placeholder="Photo URL"
              required
            />

            <input
              className="w-full text-white placeholder:text-white bg-transparent px-2 py-2 rounded text-sm outline-none border mb-3"
              type="email"
              name="email"
              id=""
              placeholder="Enter Email"
              required
            />

            <input
              className="w-full text-white placeholder:text-white bg-transparent px-2 py-2 rounded text-sm outline-none border mb-3"
              type="password"
              name="password"
              id=""
              placeholder="Password"
            />

            <button
              type="submit"
              className="text-white placeholder:text-white bg-success border border-success  w-full rounded py-2 uppercase mb-3"
            >
              Register
            </button>
          </form>

          <p className="text-white font-light">
            You have already Acount?{" "}
            <Link to="/login">
              {" "}
              <span className="text-success underline font-roboto ml-3 px-3   ">
                Login
              </span>
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Resigter;
