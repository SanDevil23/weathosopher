import React, { useState } from 'react'
import axios from "axios"


function Card() {
    const [city, setCity] = useState("");
    const [temp, setTemp] = useState("");
    const [humidity, setHumidity] = useState("");
    const [speed, setSpeed] = useState("");
    const [desc, setDesc] = useState("");
    const [icon, setIcon] = useState("");


    let input = "Delhi";

    const getCity = () =>{
        input = document.getElementById('loc').value;
        console.log(input);

        if (input !== "")
            getData();
    }


    const getData = async() =>{
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
    
    return (
    <div>
        <div className='text-xl mt-6'>
            {/* <label htmlFor="city">Enter City</label> */}
            <input className="block text-lg w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500" type="text" id='loc' onClick={getCity} placeholder='Enter City'/>
            <input className="px-4 py-2 mt-2 rounded text-blue-500 font-bold border border-blue-500 bg-white hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" type="submit" onClick={getCity}/>
        </div>

        <div className="p-5 mt-5 text-xl font-medium leading-loose bg-slate-200">
            <p><b>City : </b> {city}</p>
            <p><b>Temperature : </b>{temp}°Celsius</p>
            <p><b>Humidity : </b>{humidity}%</p>
            <p><b>Wind Speed : </b>{speed} km/h</p>
            <p><b>Description : </b>{desc}</p>
        </div>

        <button className="text-xl px-4 py-2 mt-2 rounded text-blue-500 font-bold border border-blue-500 bg-white hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" type="submit"><a href="/">Back</a></button>

    </div>
  )
}

export default Card
