import React from "react";
import Date from "../common/Date";
import Temperature from "../common/Temperature";
import WeatherIcon from "../common/WeatherIcon";
import CityName from "./components/CityName";

const currentWeatherCard = (props) => {
  return (
    <div>
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
