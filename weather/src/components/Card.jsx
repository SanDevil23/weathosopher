import React, { useEffect, useState } from 'react'
import axios from "axios"
import Autocomplete from './Autocomplete';
import City from './CityData';

function Card() {

    const staticData = City;
    // const [data, setData] = useState({});
    const [city, setCity] = useState("");
    const [temp, setTemp] = useState("");
    const [humidity, setHumidity] = useState("");
    const [speed, setSpeed] = useState("");
    const [desc, setDesc] = useState("");
    const [icon, setIcon] = useState("");
    const [min, setMin] = useState("");
    const [max, setMax] = useState("");

    let input = "leh";
    const setInput = () => {
        input = document.getElementById('loc').value;
    };
    
    const fetchSuggestions = () => {
        // return dynamic data
    }
    
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
            setMin(data.main.temp_min);
            setMax(data.main.temp_max);
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
            <Autocomplete
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
            />
        </div>

        <div className="grid grid-cols-3 p-5 mt-5 w-1/4 h-1/3 rounded-xl items-center text-xl font-medium leading-loose bg-cyan-700 text-slate-50">
            
            <div className='col-span-3 text-4xl font-bold text-center'>{city}</div>
            
            <div className='col-span-3 row-span-2 mt-10 text-3xl '>
                {desc}
            </div>
            <div className='col-span-3'>
                <img src={"https://openweathermap.org/img/wn/"+icon+"@4x.png"} alt="" />
            </div>
            <div className='col-span-2 row-span-2 text-5xl font-semibold'>
                {temp}°C
            </div>

            <div className='col-span-1 row-span-2 p-2'>
                {max}°C
                <br/>
                {min}°C
            </div>

            <div className='col-span-2 text-sm '>
                Chance of rain : {humidity}%
            </div>
{/* 
            <div>
            {icon}
            </div> */}

            <div>
                {(speed*5/18).toFixed(2)} km/h
            </div>

        </div>
            <button className="p-2 mt-2 w-1/4 rounded-lg text-blue-900 font-bold bg-white focus:outline-none  focus:ring-0 active:translate-y-2" onClick={getData} placeholder='Submit'>Check</button>

        {/* <button className="text-xl px-4 py-2 mt-2 rounded text-blue-500 font-bold border border-blue-500 bg-white hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" type="submit"><a href="/">Clear</a></button> */}

    </div>
  )
}

export default Card
