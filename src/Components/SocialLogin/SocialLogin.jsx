import React from "react";
import ManageAuth from "../ManageAuth/ManageAuth";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
const SocialLogin = () => {
  const { googleLogin, gitHubLogin } = ManageAuth();

  const handleButton = (media) => {
    media()
      .then((res) => console.log(res))
      .catch((error) => console.log(error.message));
  };
  const githubHandler = (gitHub) => {
    gitHub()
      .then((res) => console.log(res))
      .catch((error) => console.log(error.message));
  };
  return (
    <>
      <div className="divider text-white">continue with</div>
      <div className=" flex justify-center gap-7">
        <button
          onClick={() => handleButton(googleLogin, gitHubLogin)}
          className="bg-white h-10 w-10 hover:bg-black transition delay-75 hover:text-white rounded-full"
        >
          <div className="flex justify-around">
            <FcGoogle />
          </div>
        </button>
        <button
          onClick={() => githubHandler(gitHubLogin)}
          className=" bg-white h-10 w-10 hover:bg-black transition delay-75 hover:text-white rounded-full"
        >
          <div className="flex justify-around">
            <BsGithub />
          </div>
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
