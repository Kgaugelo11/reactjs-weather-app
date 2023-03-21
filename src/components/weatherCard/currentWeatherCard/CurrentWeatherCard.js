import React, {useEffect, useState} from "react";
import WeatherIcon from "../common/WeatherIcon";

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
    <div>
      <h2>{props.location}</h2>
      <h2>{currentDate}</h2>
      <h2>{currentTime}</h2>
      <h2>{roundTemperatureToNearest(props.weather.temperature)}°C</h2>
      <WeatherIcon
        condition={props.weather.condition}
      />
    </div>
  );
}

export default CurrentWeatherCard;
