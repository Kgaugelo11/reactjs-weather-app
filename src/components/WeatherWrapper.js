import React, {useState} from "react";
import LocationInput from "./location/LocationInput";
import "./WeatherWarpper.css";
import CurrentWeatherCard from "./weatherCard/currentWeatherCard/CurrentWeatherCard";
import WeatherGraph from "./weatherGraph/WeatherGraph";
import ForecastWeatherWrapper from "./weatherCard/forecastWeatherCard/ForecastWeatherWrapper";

const WeatherWrapper = () => {
  const [location, setLocation] = useState("Johannesburg")

  const onSubmitHandler = (event) => {
    event.preventDefault();
  }

  const keyDownHandler = (event) => {
    if (event.key === 'Enter') {
      setLocation((prevState => {
        prevState = event.target.value;
        return prevState
      }));
    }
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <div>
        <div>
          <LocationInput onKeyDown={keyDownHandler}/>
        </div>
        <div className={"contain-current-graph"}>
          <div className={"contain-current-graph_child"}>
            <CurrentWeatherCard/>
          </div>
          <div className={"contain-current-graph_child"}>
            <WeatherGraph/>
          </div>
        </div>
        <div>
          <ForecastWeatherWrapper/>
        </div>
      </div>
    </form>
  )
}

export default WeatherWrapper;