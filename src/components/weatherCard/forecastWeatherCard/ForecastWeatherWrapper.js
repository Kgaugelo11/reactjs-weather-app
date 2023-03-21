import React from "react";
import ForecastWeatherCard from "./ForecastWeatherCard";
import "./ForecastWeatherWrapper.css";

const ForecastWeatherWrapper = () => {
  return (
    <div className={"container"}>
      <div className={"flex-child"}>
        <ForecastWeatherCard num={"1"}/>
      </div>
      <div className={"flex-child"}>
        <ForecastWeatherCard num={"2"}/>
      </div>
      <div className={"flex-child"}>
        <ForecastWeatherCard num={"3"}/>
      </div>
    </div>
  )
}

export default ForecastWeatherWrapper
