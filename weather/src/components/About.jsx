import React from 'react'

const About = ({handleToggle}) => {
    const closeButton = (e) => {
        handleToggle();
    }
  return (
    <div className='p-5 h-screen bg-slate-200'>
        <button onClick={closeButton} className='bg-black text-white p-2 rounded-md active:translate-y-2'>Cancel</button>
        <div className='p-10 text-7xl text-center text-teal-700 font-extrabold tracking-wider'>
            About the Project
        </div>


        <div className='text-xl text-gray-700'>
            A weather forecasting project involves developing a system or model to predict weather conditions based on data collected from various sources, such as satellites, weather stations, and historical data. The project typically focuses on analyzing patterns in temperature, humidity, wind speed, and atmospheric pressure to forecast future weather events. Techniques such as machine learning, statistical analysis, and numerical weather prediction (NWP) models are often used to improve the accuracy of predictions. The project can range from simple applications predicting daily weather to more advanced systems providing long-term forecasts and severe weather warnings. The goal is to provide accurate, timely weather information to help in planning activities, ensuring safety, and supporting decision-making in sectors like agriculture, transportation, and disaster management.
        </div>
        <div className='text-xl pt-1 text-lime-800'>
            <b>Technology : </b> ReactJS, OpenWeatherAPI, HTML, Tailwind
        </div>
        <div className='text-xl pt-1 text-lime-800'>
            <b>GitHub Link : </b> <a className='hover:text-indigo-500' href="https://github.com/SanDevil23/weathosopher " target='_blank'>https://github.com/SanDevil23/weathosopher</a>    
        </div>
        {/* <div className='text-xl pt-1 text-lime-800'>
            <b>Technology : </b> ReactJS, OpenWeatherAPI, HTML, Tailwind
        </div> */}
    </div>
  )
}

export default About
