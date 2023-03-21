import React, {useEffect, useState} from "react";
import LocationInput from "./location/LocationInput";
import "./WeatherWrapper.css";
import CurrentWeatherCard from "./weatherCard/currentWeatherCard/CurrentWeatherCard";
import WeatherGraph from "./weatherGraph/WeatherGraph";
import ForecastWeatherWrapper from "./weatherCard/forecastWeatherCard/ForecastWeatherWrapper";

const WeatherWrapper = () => {
  const [location, setLocation] = useState("Johannesburg");
  const [weather, setWeather] = useState({});

  useEffect(() => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&&appid=01b7b4f97ada9006a27f7aa192d2e0c8`;

    fetch(apiUrl).then(response => response.json()).then(data => {
      setWeather((prevState => {
        prevState = {
          condition: data.weather[0].description,
          temperature: data.main.temp,
          humidity: data.main.humidity,
          pressure: data.main.pressure
        };
        return prevState
      }));
    }).catch(error => {
      console.log(error);
    });
  }, [location]);

  const onSubmitHandler = (event) => {
    event.preventDefault();
  }

  const keyDownHandler = (event) => {
    if (event.key === 'Enter') {
      setLocation((prevState => {
        prevState = event.target.value;
        return prevState;
      }));
    }
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <div>
        <div>
          <LocationInput onKeyDown={keyDownHandler}/>
        </div>
        <div className={"container"}>
          <div className={"container-currentWeather"}>
            <CurrentWeatherCard location={location} weather={weather}/>
          </div>
        </div>
        <div className={"container-forecastWeather"}>
          <ForecastWeatherWrapper/>
        </div>
      </div>
    </form>
  );
}

export default WeatherWrapper;