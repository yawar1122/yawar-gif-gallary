import React, { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Navbar from "../Home Page Components/Navbar";

function Home({ darkMode, setDarkMode }) {

  
  return (
    <div className={`${darkMode ? "bg-gradient-to-r from-indigo-400 to-cyan-400" : "bg-gradient-to-r from-slate-900 to-slate-700"} overflow-hidden h-screen`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
  
      
      <Outlet />
    </div>
  );
}

export default Home;
