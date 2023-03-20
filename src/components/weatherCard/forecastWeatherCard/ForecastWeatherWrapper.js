import React from "react";
import ForecastWeatherCard from "./ForecastWeatherCard";
import "./ForecastWeatherWrapper.css"

const ForecastWeatherWrapper = () => {
  return (
    <div className={"container"}>
      <di className={"flex-child"}>
        <ForecastWeatherCard num={"1"}/>
      </di>
      <di className={"flex-child"}>
        <ForecastWeatherCard num={"2"}/>
      </di>
      <div className={"flex-child"}>
        <ForecastWeatherCard num={"3"}/>
      </div>
    </div>
  )
}

export default ForecastWeatherWrapper
