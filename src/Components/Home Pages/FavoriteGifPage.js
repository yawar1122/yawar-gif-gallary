import React from "react";
import toast from "react-hot-toast";
import { FaHeart } from "react-icons/fa";

function FavoriteGifPage({ favGIF, setFavGIF }) {
  return (
    <div className="mt-5 overflow-y-scroll h-full pb-[120px] flex flex-col items-center">
      <div className="max-w-[1400px] w-[1400px] flex flex-row flex-wrap gap-4 justify-center mx-auto">
        {favGIF.length === 0 ? (
          <div className=" text-white">No Favorite GIF Available</div>
        ) : (
          favGIF.map((currGIF) => {
            return (
              <div className="w-300px h-fit  border-2 rounded-md">
                <img
                  src={currGIF.gif}
                  className="w-[350px] object-cover h-[400px] rounded-md"
                />

                <div
                  className="w-full cursor-pointer bg-white flex justify-center items-center"
                  onClick={() => {
                    const newFavGif = favGIF.filter((GIF) => {
                      return GIF.gifKey !== currGIF.gifKey;
                    });
                    setFavGIF(newFavGif);
                    toast.error("GIF Removed")
                  }}
                >
                  Removed
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default FavoriteGifPage;
