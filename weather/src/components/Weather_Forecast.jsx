import axios from 'axios';
import React from 'react'

const Weather_Forecast = async() => {

    const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${input}&appid=${apiK}`);
    console.log(data);



    const options = {
    method: 'GET',
    url: 'https://google-place-autocomplete-and-place-info.p.rapidapi.com/maps/api/place/autocomplete/json',
    params: {input: 'Bombay'},
    headers: {
        'x-rapidapi-key': 'b27c1c2272mshf2fa2c02d31bcbbp13a792jsn3937dac9da1a',
        'x-rapidapi-host': 'google-place-autocomplete-and-place-info.p.rapidapi.com'
    }
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }

  return (
    <div>

    </div>
  )
}

export default Weather_Forecast
