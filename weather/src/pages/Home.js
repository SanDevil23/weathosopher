import React from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import weather_anim from "../animations/weather_anim.json";

const Home = () => {
  return (
    <div className="bg-sky-300 w-screen h-screen">
      <h1 className="p-3 text-2xl text-sky-950 text-center font-extrabold lg:text-6xl ">
        Weathosopher
      </h1>
      <h3 className="text-2xl text-sky-900 text-center p-5 font-semibold">
        Accurate weather forecasts at your fingertips <br></br>
        <button className="animate-bounce mt-7 p-1 rounded text-white font-bold bg-teal-700 hover:bg-sky-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          <Link to="/v1">Check Weather</Link>
        </button>
      </h3>

      {/* <div className="grid grid-cols-2 gap-4">
      <div>Weather Forecast</div>
      <div style={{width:"30%",margin:"40vw"}}>
      <Lottie loop={true} animationData={weather_anim}/>
      </div> */}
      {/* </div>   */}

      {/* footer */}
      <div className="absolute inset-x-0 bottom-0 h-10 text-white">
        <p className="text-center">Copyright © 2023-2025 SA Inc. All Rights Reserved</p>
        </div>
    </div>
  );
};

export default Home;
