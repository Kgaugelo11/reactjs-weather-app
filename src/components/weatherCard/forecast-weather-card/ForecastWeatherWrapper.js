import React from "react";
import ForecastWeatherCard from "./ForecastWeatherCard";
import "./ForecastWeatherWrapper.css";

const ForecastWeatherWrapper = () => {
  return (
    <div className={"container"}>
      <div className={"flex-child"}>
        <ForecastWeatherCard/>
      </div>
      <div className={"flex-child"}>
        <ForecastWeatherCard/>
      </div>
      <div className={"flex-child"}>
        <ForecastWeatherCard/>
      </div>
    </div>
  )
}

export default ForecastWeatherWrapper
