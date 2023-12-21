

import axios from "axios";
import React, { useEffect, useState } from "react";
import { api_url } from "../../data";
import Spinner from "../Spinner";
import GifCard from "../Home Page Components/GifCard";

function RandomGifPage({ favGIF, setFavGIF }) {
  const [gifArray, setGifArray] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchGif() {
    setLoading(true);

    try {
      const temp = [];

      for (let i = 1; i <= 12; i++) {
        const { data } = await axios.get(api_url);
        const gif = data.data.images.downsized_large.url;
        const key = data.data.id;
        temp.push({ gif, key });
      }

      setGifArray(temp);
    } catch (e) {
      console.log(e);
    }

    setLoading(false);
  }

  useEffect(() => {
    fetchGif();
  }, []);

  return (
    <div className="overflow-y-scroll h-full pb-[120px] flex flex-col items-center">


      <div
      className="my-4 bg-white rounded-md px-5 py-2 shadow-xl transition-all duration-200 ease-in-out cursor-pointer  hover:bg-blue-500 hover:text-white"
        onClick={() => {
          fetchGif();
        }}
      >
        <div>
        Random GIF Button
        </div>
      </div>



      <div className="max-w-[1400px] w-[1400px] flex flex-row flex-wrap gap-4 justify-center mx-auto">
        {loading ? (
          <Spinner />
        ) : (
          gifArray.map(({ gif, key }) => (
            <GifCard
              gif={gif}
              gifKey={key}
              favGIF={favGIF}
              setFavGIF={setFavGIF}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default RandomGifPage;
{
  /* return  */
}
