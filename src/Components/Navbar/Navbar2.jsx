import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo (2).png";
import useIcon from "../../assets/user.png";
import ManageAuth from "../ManageAuth/ManageAuth";

const Navbar = () => {
  const { user, logOut } = ManageAuth();
  console.log(user?.photoURL);
  const handleLogOut = () => {
    logOut().then().catch();
  };
  const nav = (
    <>
      <NavLink
        className={({ isActive, isLoading }) =>
          isLoading ? "loading" : isActive ? "text-rose-500 underline" : ""
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive, isLoading }) =>
          isLoading ? "loading" : isActive ? "text-rose-500  underline" : ""
        }
        to="/services"
      >
        Services
      </NavLink>

      <NavLink
        className={({ isActive, isLoading }) =>
          isLoading ? "loading" : isActive ? "text-rose-500  underline" : ""
        }
        to="/event"
      >
        Event
      </NavLink>
      <NavLink
        className={({ isActive, isLoading }) =>
          isLoading ? "loading" : isActive ? "text-rose-500  underline" : ""
        }
        to="/contact"
      >
        Contact
      </NavLink>
      <NavLink
        className={({ isActive, isLoading }) =>
          isLoading
            ? "loading"
            : isActive
            ? "text-rose-500 font-semibold  underline "
            : ""
        }
        to="/resigter"
      >
        Register
      </NavLink>
    </>
  );

  return (
    <div className=" md:w-9/12 lg:w-9/12 mx-auto mt-6">
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn text-rose-500 btn-ghost   lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-5 shadow backdrop-blur bg-white/30 w-52 rounded border border-gradient-to-tr  border-gray-300 font-normal uppercase font-roboto gap-5  text-black "
            >
              {nav}
            </ul>
          </div>
          <NavLink to="/" className="  ">
            <div className="flex items-center">
              <img
                className="w-24 hidden lg:block md:block"
                src={logo}
                alt=""
              />
              <p className="text-4xl font-medium font-bebas text-black">
                <span className="text-rose-500 text-5xl">G</span>aming
              </p>
            </div>
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1  text-[14px] font-normal uppercase font-roboto gap-5 text-black ">
            {nav}
          </ul>
        </div>
        <div className="navbar-end flex gap-2 items-center">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user ? user.photoURL : useIcon} alt="" />
              </div>
            </label>

            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-4 shadow menu menu-sm dropdown-content bg-black text-white  w-56 rounded-lg"
            >
              <li>{user ? user.displayName : ""}</li>
              <li>{user ? user.email : ""}</li>
            </ul>
          </div>

          {user ? (
            <button
              onClick={handleLogOut}
              className="text-white uppercase bg-rose-500 px-5 rounded py-[3px]"
            >
              Sing out
            </button>
          ) : (
            <Link to="/login">
              <button className="text-white uppercase bg-rose-500 px-5 rounded py-[3px]">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
