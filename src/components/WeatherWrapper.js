import React from "react";
import { useState} from "react";
import {WiDaySunny, WiCloud, WiRain} from 'weather-icons-react';
import LocationInput from "./LocationInput";
import WeatherDisplay from "./WeatherDisplay";
import "./WeatherWarpper.css";

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
  const [wind, setWind] = useState('');
  const [errorText, setErrorText] = useState("");
  const [humidity, setHumidity] = useState("");
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
        setConditions(data.weather[0].description)
        setIcon(getWeatherIcon(data.weather[0].icon));
        setHumidity(data.main.humidity);
        setWind(data.wind.speed);
        setErrorText("");
      })
      .catch(error => {
        setErrorText(error);
      });
  };

  return (
    <div className={"container"}>
      <form onSubmit={submitHandler}>
        <div>
          <LocationInput onChange={cityNameHandler}/>
        </div>
        <div>
          <button type={"submit"}>Get weather</button>
        </div>
        <div>
          <WeatherDisplay
            icon={icon}
            wind={wind}
            temparature={temperature}
            conditions={conditions}
            humidity={humidity}
            errorText={errorText}
          />
        </div>
      </form>
    </div>
  )
}

export default WeatherWrapper;