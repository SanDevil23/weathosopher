// import weather_anim from "../animations/weather_anim.json";
// import { Link } from "react-router-dom";
// import City from '../components/CityData';
// import Autocomplete from "../components/Autocomplete";
import React, { useState } from "react";
import Lottie from "lottie-react";
import globe from '../animations/Globe.json'
import Weather from "./Weather";
import About from "../components/About";


const Home = () => {

  // const staticData = City;
  // const fetchSuggestions = async(query)=>{
  //   // return results
  // }

  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  }

  return (
    <>
    {toggle ? <About handleToggle={handleToggle}/> :
      <div>
        <div className="grid grid-cols-2 bg-cyan-300 w-full h-screen p-10">
          <div className="self-center">
            <div className="p-3 text-6xl text-sky-950 text-center font-extrabold lg:text-8xl ">
            Weathosopher
            </div>
            <h3 className="text-2xl text-sky-900 text-center p-5 font-semibold">
            What's the weather around the world today ? <br></br>
            <button onClick={handleToggle} className="animate-bounce mt-7 text-white font-bold bg-teal-700 hover:bg-sky-900 focus:outline-none  p-2  border-none border-black rounded-xl tracking-wide">
            Check Weather
            </button>
            </h3>
          </div>
          <div className="w-full p-10 flex self-center justify-center items-center ">
          <Lottie animationData={globe}/>
          </div>
        </div>
        <Weather/>

        {/* <Autocomplete
          placeholder = {"Enter City"}
          staticData = {staticData}
          fetchSuggestions = {fetchSuggestions}
          dataKey = {""}
          customLoading = {<>Loading ......</>}
          onSelect = {(res) => console.log(res)}
          onChange = {(input)=> {}}
          onBlur = {(e)=>{}}
          onFocus = {(e)=> {}}
          customStyles = {{}}
        /> */}
          <div className=" text-white">
            <p className="text-center p-5 bg-teal-900 text-white">Copyright © 2023 SanDevil23. All Rights Reserved.</p>
          </div>
      </div>
    }
    </>
  );
};

export default Home;
