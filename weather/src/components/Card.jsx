import React, { useEffect, useState } from 'react'
import axios from "axios"


function Card() {
    const [city, setCity] = useState("");
    const [temp, setTemp] = useState("");
    const [humidity, setHumidity] = useState("");
    const [speed, setSpeed] = useState("");
    const [desc, setDesc] = useState("");
    const [icon, setIcon] = useState("");


    let input = "New Delhi";
    const setInput = () => {
        input = document.getElementById('loc').value;
    };
    
    
    const getData = async() =>{
        try {

            const apiK = "507bdad56008fd251e34454c83860e49";
            const api_url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${apiK}`;
            const {data} = await axios.get(api_url);
            console.log(data);
            setCity(data.name);
            setTemp(data.main.temp);
            setHumidity(data.main.humidity);
            setSpeed(data.wind.speed);
            setDesc(data.weather[0].description);
            setIcon(data.weather[0].icon);
        } catch (err) {
            console.log(err)
        }
        // const {name} = data;
        // const {icon, description} = data.weather[0];
        // const {temp, humidity} = data.main;
        // const {speed} = data.wind;
        // console.log(name, icon, description, temp, humidity, speed);
    }
    
    // const url = `https://openweathermap.org/img/wn/${icon}@2x.png`;



    // vanilla js definition
    // let weather = {
    //     "apiK":"507bdad56008fd251e34454c83860e49",
    //     fetchWeather: function(city) {
    //         fetch(
    //             "https://api.openweathermap.org/data/2.5/weather?q="+city
    //             +"&units=metric&appid=" 
    //             + this.apiK
    //         ).then((Response)=>Response.json()).then((data) => this.displayWeather(data));
    //     },
        
    //     displayWeather: function(data) {
    //         const {city} = data;
    //         const {icon, description} = data.weather[0];
    //         const {temp, humidity} = data.main;
    //         const {speed} = data.wind;
    //         console.log(name, icon, description, temp, humidity, speed);
    //         // document.querySelector(".city").innerText = name;
    //         // document.querySelector(".temp").innerText = temp + "°C";
    //         // document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+icon+"@2x.png";
    //         // document.querySelector(".humid").innerText = "Humidity: " + humidity + "%";
    //         // document.querySelector(".ws").innerText = "Wind Speed: " + speed + "km/h";
    //         // document.querySelector(".desc").innerText = "Description: " + description;
    //     },
    //     search: function(){
    //         this.fetchWeather(document.querySelector("#searchbar").value);
    //     }
    // };
    
    // document.querySelector(".search button").addEventListener("click", function(){
    //     weather.search();
    // });
    
    useEffect(() => {
      getData();
    }, []);
    
    return (
    <div className='flex flex-col items-center'>
        <div className='flex flex-col text-xl mt-6 w-1/4'>
            {/* <label htmlFor="city">Enter City</label> */}
            <input className="block text-lg  bg-sky-900 opacity-90 text-white w-full p-2 rounded-xl focus:outline-none "  type="text" id='loc' placeholder='Enter City' onChange={setInput}/>
            <button className="p-2 mt-2 w-1/4 rounded text-blue-900 font-bold bg-white focus:outline-none  focus:ring-0 active:translate-y-2" onClick={getData} placeholder='Submit'>Check</button>
        </div>

        <div className="grid grid-cols-3 p-5 mt-5 w-1/3 rounded-xl items-center text-xl font-medium leading-loose bg-cyan-700 text-slate-50">
            <div className='col-span-3 text-4xl font-bold'>{city}</div>
            <div className='col-span-3 row-span-2 mt-10'>
                {desc}
            </div>
            <div className='col-span-2 row-span-2 text-2xl font-semibold'>
                {temp}
            </div>

            <div>
                {humidity}
            </div>
        </div>

        {/* <button className="text-xl px-4 py-2 mt-2 rounded text-blue-500 font-bold border border-blue-500 bg-white hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" type="submit"><a href="/">Clear</a></button> */}

    </div>
  )
}

export default Card
