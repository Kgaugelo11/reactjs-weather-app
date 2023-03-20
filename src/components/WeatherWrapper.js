import React from "react";
import LocationInput from "./location/LocationInput";
import "./WeatherWarpper.css";
import CurrentWeatherCard from "./weatherCard/currentWeatherCard/CurrentWeatherCard";
import WeatherGraph from "./weatherGraph/WeatherGraph";
import ForecastWeatherWrapper from "./weatherCard/forecastWeatherCard/ForecastWeatherWrapper";

const WeatherWrapper = () => {

  return (
    <div>
      <div>
        <LocationInput />
      </div>
      <div className={"contain-current-graph"}>
        <div className={"contain-current-graph_child"}>
          <CurrentWeatherCard />
        </div>
        <div className={"contain-current-graph_child"}>
          <WeatherGraph />
        </div>
      </div>
      <div>
        <ForecastWeatherWrapper />
      </div>
    </div>
  )
}

export default WeatherWrapper;