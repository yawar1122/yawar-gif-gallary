import React from "react";
import { useState } from "react";
import SignIn from "../Login Components/SignIn";
import SignUp from "../Login Components/SignUp";
import { BsFillBrightnessHighFill } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";
import Intro from "../Login Components/Intro";

function LoginPage({darkMode,setDarkMode,isLoggedIn,setIsLoggedIn}) {
  const [loginType, setLoginType] = useState("signin");

  const changeHandler = (type) => {
    setLoginType(type);
  };

  return (
    <div
      className={`w-screen h-screen flex flex-col items-center relative ${
        darkMode
          ? "bg-gradient-to-r from-[#3c8ce7] to-[#00eaff]"
          : "bg-gradient-to-r from-[#191714] to-[#050d43]"
      }`}
    >
      {/* into */}
      <Intro
        darkMode={darkMode}
      />

      {/* Login content */}
      <div
        className={` w-[450px] mx-auto flex flex-col border items-center absolute justify-start ${
          darkMode ? "bg-[rgba(251,251,251,0.8)]" : " bg-[rgba(251,251,251,0.5)]"
        } rounded-xl h-[450px] login-shadow mt-40 z-10`}
      >
        {/* signin buttons */}
        <div className="w-full flex justify-around mt-5">
          <button
            onClick={() => changeHandler("signin")}
            className={` text-xl px-8 py-1 bg-blue-300 text-white rounded-md
           ${loginType === "signin" && "border border-white bg-blue-900"}
           `}
          >
            Sign In
          </button>


          {/* Dark Mode Feature Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`ext-2xl transition-all duration-200 w-8 h-8 flex justify-center items-center rounded-full ${darkMode ? "bg-white" : "bg-white"} border border-black shadow-lg`}
          >
            {darkMode ? <MdDarkMode /> : <BsFillBrightnessHighFill  className="text-yellow-500"/>}
          </button>



          {/* Sign Up Button */}
          <button
            onClick={() => changeHandler("signup")}
            className={` text-xl px-8 py-1 bg-blue-300 text-white rounded-md
           ${loginType === "signup" && "border border-white bg-blue-900"}
           `}
          >
            Sign Up
          </button>
        </div>

        <div className="flex justify-center items-center w-full h-full">
          {loginType === "signin" ? <SignIn setIsLoggedIn={setIsLoggedIn}/> : <SignUp setIsLoggedIn={setIsLoggedIn} />}
        </div>
      </div>

      {/* Animation Box */}
      <div className="animate w-[200px] h-[200px] top-32 left-1/3 rounded-full bg-white absolute z-0"></div>
      <div className="animate2 w-[200px] h-[200px] bottom-32 right-1/3 rounded-full bg-white absolute z-0"></div>
    </div>
  );
}

export default LoginPage;
