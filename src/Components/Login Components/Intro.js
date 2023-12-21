import React from 'react'

function Intro({darkMode}) {
  return (
    <div
        className={` borde
          
         ${
          darkMode ? "bg-white text-slate-950" : "bg-[rgba(251,251,251,1)] text-black"
        }  px-20 py-2  rounded-md shadow-xl z-10 mt-3 text-center `}
      >
        <p className="  text-3xl">Mohammad Yawar Raza</p>
        <p className={`" font-bold ${darkMode ? "text-blue-500" : "text-black"} text-xs"`}>
          Frontend Web Developer
        </p>

        <div className="flex justify-between gap-3 text-xs ">
          <p>Institute Roll No - 0536CS201025</p>
          <p className="text-xs ">
            Sagar Institute of Science Technology and Engineering{" "}
          </p>
        </div>
      </div>
  )
}

export default Intro