import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./Components/Pages/LoginPage";
import Home from "./Components/Pages/HomePage";
import RandomGifPage from "./Components/Home Pages/RandomGifPage";
import SearchGifPage from "./Components/Home Pages/SearchGifPage";
import FavoriteGifPage from "./Components/Home Pages/FavoriteGifPage";
import { useEffect, useState } from "react";
import axios from "axios";
import { api_url } from "./data";
import PrivateRoute from "./Components/PrivateRoute";


function App() {

  const [darkMode, setDarkMode] = useState(true);
  const [favGIF,setFavGIF] = useState([]);
  const [isLoggedIn,setIsLoggedIn] = useState(false);

  



  return (
    <div className=" overflow-x-hidden ">
      
      <Routes>
        <Route path="/" element={<LoginPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} darkMode={darkMode} setDarkMode={setDarkMode} />} />
        <Route path="/home" element={
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <Home favGIF={favGIF} setFavGIF={setFavGIF} darkMode={darkMode} setDarkMode={setDarkMode} />
          </PrivateRoute>
        } >

          <Route index='/home' element={<RandomGifPage favGIF={favGIF} setFavGIF={setFavGIF}/>}/>
          <Route path="/home/searchGIF" element={<SearchGifPage favGIF={favGIF} setFavGIF={setFavGIF}/>}/>
          <Route path="/home/FavoriteGIF" element={<FavoriteGifPage favGIF={favGIF} setFavGIF={setFavGIF}/>}/>

        </Route>
      </Routes>
    </div>
  );
}

export default App;
