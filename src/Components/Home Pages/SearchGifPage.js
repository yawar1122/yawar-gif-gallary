import React, { useEffect, useState } from 'react'
import { api_url } from '../../data';
import axios from 'axios';
import Spinner from '../Spinner';
import GifCard from '../Home Page Components/GifCard';

function SearchGifPage({favGIF,setFavGIF}) {

  const [gifType,setGifType] = useState("");
  const [gifArray, setGifArray] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchGif = async () => {
    setLoading(true);
    try {
        const temp = [];
        for(let i=0;i<12;i++){
          const { data } = await axios.get(`${api_url}&tag=${gifType}`);
          const gif = data.data.images.downsized_large.url;
          const key = data.data.id;
          temp.push({gif,key});
        }
        setGifArray(temp);
      
    } catch (e) {
      console.log(e);
    }

    setLoading(false);
  };

  const submitHandler =(e)=>{
    e.preventDefault();
    fetchGif();
  }

  return (
    <div className='w-screen flex flex-col items-center mt-3 overflow-y-scroll h-full pb-[200px]'>

    {/* Input Section */}
      <form onSubmit={submitHandler}>
      <input
        type='text'
        onChange={(e)=>setGifType(e.target.value)}
        placeholder='Search GIF'
        className='w-[400px] h-11 px-2 rounded-l-md'
      />
      <button 
      className=' h-11 bg-blue-500 text-white rounded-r-md px-4 '
      >Search</button>
      </form>



      <div className="max-w-[1400px] w-[1400px] flex flex-row flex-wrap gap-4 justify-center mx-auto mt-3 ">
      {loading ? (
        <Spinner />
      ) : gifArray.map(({gif,key})=>{
        return <GifCard
            gif={gif}
            gifKey={key}
            favGIF={favGIF}
            setFavGIF={setFavGIF}
          />
      })
        }
      </div>

    </div>
  )
}

export default SearchGifPage