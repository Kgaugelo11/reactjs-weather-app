import React from "react";
import Temperature from "../common/Temperature";
import Date from "../common/Date";
import WeatherIcon from "../common/WeatherIcon";


const ForecastWeatherCard = (props) => {
  return (
    <div>
      <Date/>
      <Temperature/>
      <WeatherIcon
        condition = {props.condition}
      />
    </div>
  );
}

export default ForecastWeatherCard
