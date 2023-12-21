import React, { useState } from "react";
import toast from "react-hot-toast";
import { BsFillBrightnessHighFill } from "react-icons/bs";
import { WiMoonAltNew } from "react-icons/wi";
import { Link, useNavigate } from "react-router-dom";

function Navbar({ darkMode, setDarkMode }) {
  const [gifPage, setGifPage] = useState("Random");

  const navigate = useNavigate();

  return (
    <div className="w-screen py-2 flex items-center justify-between px-10 border-b shadow-lg ">
      <div className="max-w-[1300px] w-[1300px] mx-auto h-full flex items-center justify-between ">
        {/* left */}
        <div>
          <div className="text-4xl font-semibold text-white">
            Mohammad Yawar
          </div>
          <div className="text-sm text-white">Mob No - 7081449889</div>
        </div>

        {/* middle */}
        <div className="flex justify-between gap-5 text-white ">
          <div
            onClick={() => {
              setGifPage("Random");
            }}
            className="group"
          >
            <Link to="/home" className=" hover:text-slate-100">
              Random GIF
            </Link>
            <div
              className={`${
                gifPage === "Random" ? "visible" : "hidden"
              } w-full h-[2px] bg-white transition-all ease-in-out duration-200 shadow-md flex justify-end rounded-full  flex-col`}
            ></div>
          </div>
          <div
            onClick={() => {
              setGifPage("Search");
            }}
          >
            <Link to="/home/searchGIF">Search GIF</Link>
            <div
              className={`${
                gifPage === "Search" ? "visible" : "hidden"
              }  w-full h-[2px] bg-white transition-all ease-in-out duration-200`}
            ></div>
          </div>
          <div
            onClick={() => {
              setGifPage("Favorite");
            }}
          >
            <Link to="/home/FavoriteGIF">Favorite GIF</Link>
            <div
              className={`${
                gifPage === "Favorite" ? "visible" : "hidden"
              }  w-full h-[2px] bg-white transition-all ease-in-out duration-200`}
            ></div>
          </div>
        </div>

        {/* right */}
        <div className="flex gap-3 items-center">
          <div onClick={() => setDarkMode(!darkMode)}>
            {/* dark light */}
            <div className="text-2xl w-[76px] flex border px-1 py-1 justify-between rounded-full bg-blue-500 text-white shadow-2xl shadow-black">
              <div className={`${darkMode && "bg-blue-900"} p-1 rounded-full`}>
                {darkMode && <BsFillBrightnessHighFill />}
              </div>

              <div
                className={` p-1 rounded-full ${!darkMode && "bg-blue-900"}`}
              >
                {!darkMode && <WiMoonAltNew />}
              </div>
            </div>
            {/* Logout button */}
          </div>

          <div
            onClick={() => {
              navigate("/");

              toast.success("Logged Out Successfully");
            }}
            className="px-4 py-2 text-white cursor-pointer bg-blue-500 hover:bg-blue-600 rounded-md"
          >
            Sign Out
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
