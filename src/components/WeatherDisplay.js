import React from "react";

const WeatherDisplay = (props) => {

    if (!props.errorText) {
      return (
        <div>
          <p>{props.icon}</p>
          <p>Temperature: {props.temparature}°c</p>
          <p>Conditions: {props.conditions}</p>
          <p>Humidity: {props.humidity}%</p>
          <p>Wind: {props.wind}km/h</p>
        </div>
      );
    } else {
      return (
        <div>
          <p>The name of the city is not correct. Enter a valid city name</p>
        </div>
      );
    }
}

export default WeatherDisplay;