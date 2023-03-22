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

  const capFirstLetter = (condition) => {
    if(condition) {
      const words = condition.split(" ");
      const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
      return capitalizedWords.join(" ");
    }
  }

  return (
    <div className={"current-weather"}>
      <div>
        <h2 className={"current-weather-temp"}>{roundTemperatureToNearest(props.weather.temperature)}<sup>°c</sup></h2>
      </div>
      <div>
        <h2 className={"current-location"}>{props.location}</h2>
        <h2 className={"current-weather-date"}>{currentDate}</h2>
        <h2 className={"current-weather-date"}>{currentTime}</h2>
      </div>
      <div className={"weather-icon"}>
        <div>
          <WeatherIcon
            condition={props.weather.condition}
          />
        </div>
        <div>
          <h2 className={"weather-icon-text"}>{capFirstLetter(props.weather.condition)}</h2>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeatherCard;
