import React, {useEffect, useState} from "react";
import {WiDaySunny, WiCloud, WiRain} from 'weather-icons-react';
import LocationInput from "./LocationInput";
import WeatherDisplay from "./WeatherDisplay";

const getWeatherIcon = (conditionCode) => {
  switch (conditionCode) {
    case '01d':
      return <WiDaySunny/>;
    case '01n':
      return <WiDaySunny/>;
    case '02d':
      return <WiCloud/>;
    case '02n':
      return <WiCloud/>;
    case '03d':
      return <WiCloud/>;
    case '03n':
      return <WiCloud/>;
    case '04d':
      return <WiCloud/>;
    case '04n':
      return <WiCloud/>;
    case '09d':
      return <WiRain/>;
    case '09n':
      return <WiRain/>;
    case '10d':
      return <WiRain/>;
    case '10n':
      return <WiRain/>;
    case '11d':
      return <WiRain/>;
    case '11n':
      return <WiRain/>;
    case '13d':
      return <WiRain/>;
    case '13n':
      return <WiRain/>;
    case '50d':
      return <WiCloud/>;
    case '50n':
      return <WiCloud/>;
    default:
      return <WiCloud/>;
  }
}

const WeatherWrapper = () => {
  const [cityName, setCityName] = useState("");
  const [temperature, setTemperature] = useState('');
  const [conditions, setConditions] = useState('');
  const [icon, setIcon] = useState('');

  const cityNameHandler = (event) => {
    setCityName(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&&appid=01b7b4f97ada9006a27f7aa192d2e0c8`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setTemperature(data.main.temp);
        setConditions(data.weather[0].description);
        setIcon(getWeatherIcon(data.weather[0].icon));
        console.log(data.weather[0].description)
      })
      .catch(error => console.error(error));
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <LocationInput onChange={cityNameHandler}/>
      </div>
      <div>
        <button type={"submit"}>Get weather</button>
      </div>
      <div>
        <WeatherDisplay icon={icon} temparature={temperature} conditions={conditions}/>
      </div>
    </form>
  )
}

export default WeatherWrapper;