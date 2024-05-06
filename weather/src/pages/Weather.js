import React from "react";
import Card from "../components/Card";

const Weather = () => {
  return (
    <div className="w-screen p-3">
      <h1 className="text-center text-3xl font-semibold lg:text-6xl tracking-widest">
        Weathosopher
      </h1>
      <Card />
    </div>
  );
};

export default Weather;
