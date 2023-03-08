import React from "react";

const WeatherDisplay = (props) => {
  return (
    <div>
      <p>{props.icon}</p>
      <p>Temperature: {props.temparature} °c</p>
      <p>Conditions: {props.conditions}</p>
    </div>
  );
}

export default WeatherDisplay;