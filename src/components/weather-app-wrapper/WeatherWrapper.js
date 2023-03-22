import React, {useEffect, useState} from "react";
import LocationInput from "../location-input/LocationInput";
import "./WeatherWrapper.css";
import CurrentWeatherCard from "../weatherCard/current-weather-card/CurrentWeatherCard";
import ForecastWeatherWrapper from "../weatherCard/forecast-weather-card/ForecastWeatherWrapper";
import WeatherContext from "../../store/weatherContext";

const WeatherWrapper = () => {
  const [location, setLocation] = useState("Johannesburg");
  const [weather, setWeather] = useState({});

  useEffect(() => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&&appid=01b7b4f97ada9006a27f7aa192d2e0c8`;

    fetch(apiUrl).then(response => response.json()).then(data => {
      setWeather((prevState => {
        prevState = {
          condition: data.weather[0].description,
          temperature: data.main.temp,
          humidity: data.main.humidity,
          pressure: data.main.pressure
        };
        return prevState
      }));
    }).catch(error => {
      console.log(error);
    });
  }, [location]);

  const onSubmitHandler = (event) => {
    event.preventDefault();
  }

  const capFirstLetter = (location) => {
    const words = location.split(" ");
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    return capitalizedWords.join(" ");
  }

  const locationIsValid = (location) => {
    return location.trim().length !== 0;
  }

  const keyDownHandler = (event) => {
    if (event.key === 'Enter' && locationIsValid(event.target.value)) {
      setLocation((prevState => {
        prevState = capFirstLetter(event.target.value);
        return prevState;
      }));
    }
  }

  const onBlurHandler = (event) => {
    if (locationIsValid(event.target.value)) {
      setLocation((prevState => {
        prevState = capFirstLetter(event.target.value);
        return prevState;
      }));
    }
  }

  return (
    <WeatherContext.Provider
      value={{
        weather: weather,
        location: location
      }}
    >
      <form onSubmit={onSubmitHandler}>
        <div>
          <div>
            <LocationInput
              onKeyDown={keyDownHandler}
              onBlur={onBlurHandler}
            />
          </div>
          <div className={"container"}>
            <div className={"container-currentWeather"}>
              <CurrentWeatherCard/>
            </div>
          </div>
          <div className={"container-forecastWeather"}>
            <ForecastWeatherWrapper/>
          </div>
        </div>
      </form>
    </WeatherContext.Provider>
  );
}

export default WeatherWrapper;