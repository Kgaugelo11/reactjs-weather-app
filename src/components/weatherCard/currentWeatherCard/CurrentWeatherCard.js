import React from "react";
import Date from "./components/Date";
import Temperature from "../common/Temperature";
import WeatherIcon from "../common/WeatherIcon";
import CityName from "./components/CityName";

const currentWeatherCard = (props) => {
  return (
    <div>
      <h2>Current weather component</h2>
      <CityName/>
      <Date/>
      <Temperature/>
      <WeatherIcon
        condition={props.condition}
      />
    </div>
  );
}

export default currentWeatherCard;
