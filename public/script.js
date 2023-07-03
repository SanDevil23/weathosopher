
//import {API_key} from "./api.js" 

let weather = {
    "apiK":"507bdad56008fd251e34454c83860e49",
    fetchWeather: function(city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="+city
            +"&units=metric&appid=" 
            + this.apiK
        ).then((Response)=>Response.json()).then((data) => this.displayWeather(data));
    },
    
    displayWeather: function(data) {
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        console.log(name, icon, description, temp, humidity, speed);
        document.querySelector(".city").innerText = name;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+icon+"@2x.png";
        document.querySelector(".humid").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".ws").innerText = "Wind Speed: " + speed + "km/h";
        document.querySelector(".desc").innerText = "Description: " + description;
    },
    search: function(){
        this.fetchWeather(document.querySelector("#searchbar").value);
    }
};

document.querySelector(".search button").addEventListener("click", function(){
    weather.search();
});