import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-indigo-950 w-screen h-screen">
      <h1 className="p-3 text-2xl text-white text-center font-extrabold lg:text-6xl ">Weathosopher</h1>
      <h3 className="text-xl text-white text-center p-5">Accurate weather forecasts at your fingertips.</h3>
      <button className="justify-center  px-4 py-2  border border-purple-500 hover:bg-violet-400 bg-white text-xl font-bold rounded-lg shadow-sm shadow-white">
        <Link to="/v1">Weather</Link>
      </button>
    </div>
  );
};

export default Home;
