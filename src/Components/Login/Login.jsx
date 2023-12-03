import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import ManageAuth from "../ManageAuth/ManageAuth";
import Navbar2 from "../Navbar/Navbar2";
import AOS from "aos";
import "aos/dist/aos.css";
const Login = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  const { login } = ManageAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const loginHandler = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    login(email, password).then((res) => console.log(res.user));
    navigate(location?.state ? location.state : "/")
    .catch((error) =>
      console.log(error.message)
    );
  };

  return (
    <div className="mt-16">
      <Navbar2 />
      <div>
        <div
          data-aos="flip-right"
          className="flex w-full rounded-xl bg-cover bg-gray-100 h-[700px] lg:w-9/12 md:w-9/12 mx-auto p-5 bg-backgroud bg-no-repeat items-center justify-center"
        >
          <div className="  backdrop-blur  bg-white/20 md:w-7/12 lg:w-7/12 p-8 py-10 flex items-center justify-center rounded flex-col border-l-2 border-t-2 border-info">
            <h1 className="text-3xl font-semibold mb-7 ">Please Login</h1>
            <form onSubmit={loginHandler}>
              <input
                className="w-full  bg-transparent placeholder:text-white text-white px-2 py-2 rounded text-sm outline-none border mb-3"
                type="email"
                name="email"
                id=""
                placeholder="Enter Email"
              />

              <input
                className="w-full bg-transparent placeholder:text-white text-white px-2 py-2 rounded text-sm outline-none border mb-3"
                type="password"
                name="password"
                id=""
                placeholder="Password"
              />

              <button
                type="submit"
                className="text-white bg-info border border-info w-full rounded py-2 uppercase mb-3"
              >
                Login
              </button>
              <label className="label">
                <a href="#" className=" font-light text-white link link-hover">
                  Forgot password?
                </a>
              </label>

              <label className="flex text-white justify-between">
                New here ?{" "}
                <Link to="/resigter">
                  {" "}
                  <span className="text-info underline link link-hover">
                    {" "}
                    Create an account
                  </span>
                </Link>{" "}
              </label>

              <SocialLogin />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
