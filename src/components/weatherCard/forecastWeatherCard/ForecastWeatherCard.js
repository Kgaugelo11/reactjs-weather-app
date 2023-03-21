import React from "react";
import Temperature from "../common/Temperature";
import WeatherIcon from "../common/WeatherIcon";


const ForecastWeatherCard = (props) => {
  return (
    <div>
      <h2>Coming soon</h2>
      <Temperature/>
      <WeatherIcon
        condition = {props.condition}
      />
    </div>
  );
}

export default ForecastWeatherCard
