import React, {useEffect, useState} from "react";
import WeatherIcon from "../common/WeatherIcon";
import "./CurrentWeather.css"

const CurrentWeatherCard = (props) => {
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    setCurrentDate((prevState => {
      const date = new Date();
      prevState = date.toLocaleDateString([], {day: "2-digit", month: "short", year: "numeric"});
      return prevState;
    }))
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime((prevState => {
        prevState = new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
          weekday: "long"
        });
        return prevState;
      }));
    }, 0);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const roundTemperatureToNearest = (temp) => {
    const num = parseFloat(temp);
    return Math.floor(num);
  }

  return (
    <div className={"current-weather"}>
      <div>
        <h2
          className={"current-weather-temp"}>{roundTemperatureToNearest(props.weather.temperature)}°C</h2>
      </div>
      <div>
        <h2>{props.location}</h2>
        <h2>{currentDate}</h2>
        <h2>{currentTime}</h2>
      </div>
      <div className={"weather-icon"}>
        <WeatherIcon
          condition={props.weather.condition}
        />
        <h2 className={"weather-icon-text"}>{props.weather.condition}</h2>
      </div>
    </div>
  );
}

export default CurrentWeatherCard;
