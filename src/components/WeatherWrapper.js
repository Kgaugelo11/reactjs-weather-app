import React from "react";
import { useState} from "react";
import LocationInput from "./location/LocationInput";
import WeatherDisplay from "./WeatherDisplay";
import WeatherIcon from "./weatherCard/common/WeatherIcon";
import "./WeatherWarpper.css";

const WeatherWrapper = () => {
  const [cityName, setCityName] = useState("");
  const [temperature, setTemperature] = useState('');
  const [conditions, setConditions] = useState('');
  const [wind, setWind] = useState('');
  const [errorText, setErrorText] = useState("");
  const [humidity, setHumidity] = useState("");
  const [icon, setIcon] = useState('');
  const [weather, setWeather] = useState({})

  const cityNameHandler = () => {
    setCityName(cityName);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=01b7b4f97ada9006a27f7aa192d2e0c8&q=${cityName}&days=3&aqi=no&alerts=yes`

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setTemperature(data.main.temp);
        setConditions(data.weather[0].description)
        setIcon(data.weather[0].description);
        setHumidity(data.main.humidity);
        setWind(data.wind.speed);
        setErrorText("");
      })
      .then((data) => {
        setWeather(data);
      })
      .catch(error => {
        setErrorText(error);
      });
  };

  const w = {
    icon: weather?.current?.condition?.icon
  }

  console.log(w.icon)

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
          <WeatherIcon
            condition = {icon}
          />
        </div>
      </form>
    </div>
  )
}

export default WeatherWrapper;