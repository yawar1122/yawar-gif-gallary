import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaHeart } from "react-icons/fa";

function GifCard({ gif, gifKey, favGIF, setFavGIF }) {
  const [favButton, setFavButton] = useState(false);

  const clickHandler = () => {
    setFavButton(!favButton);

    if (!favButton) {
      toast.success("GIF Added");

      setFavGIF([...favGIF, { gif, gifKey }]);
    } else {
      toast.error("GIF Removed");
      const newGIF = favGIF.filter((currGIF) => {
        return currGIF.key !== gifKey;
      });
      setFavGIF(newGIF);
    }
  };

  return (
    <div className="w-300px h-fit  border-2 rounded-md">
      <img src={gif} className="w-[350px] object-cover h-[400px] rounded-md" />

      <div className="w-full bg-white flex justify-center items-center">
        <button
          className={`text-3xl text-red-300 w-10  h-10 flex justify-center items-center rounded-full ${
            favButton && "text-red-600"
          }`}
          onClick={clickHandler}
        >
          <FaHeart />
        </button>
      </div>
    </div>
  );
}

export default GifCard;
