import React, { useState } from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
// import weather_anim from "../animations/weather_anim.json";
import globe from '../animations/Globe.json'
import Weather from "./Weather";

const Home = () => {

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(true);
  }


  return (
    <>
    {toggle ? <Weather/> :
      <div>
        <div className="grid grid-cols-2 bg-cyan-300 w-screen h-screen p-10">
          <div className="self-center">
            <div className="p-3 text-6xl text-sky-950 text-center font-extrabold lg:text-8xl ">
            Weathosopher
            </div>
            <h3 className="text-2xl text-sky-900 text-center p-5 font-semibold">
            What's the weather around the world today ? <br></br>
            <button onClick={handleToggle} className="animate-bounce mt-7 text-white font-bold bg-teal-700 hover:bg-sky-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500  p-2  border-none border-black rounded-xl tracking-wide">
            Check Weather
            </button>
            </h3>
          </div>
          <div className="w-1/2 p-10 flex self-center justify-center items-center">
          <Lottie animationData={globe}/>
          </div>
        </div>
        <Weather/>
          <div className=" text-white">
            <p className="text-center p-5 text-blue-950">Copyright © 2023 SanDevil23. All Rights Reserved.</p>
          </div>
      </div>
    }
    </>
  );
};

export default Home;
