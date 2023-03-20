import React from "react"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import "./WeatherIcon.css"
import {
  faCloud,
  faSun,
  faCloudMeatball,
  faCloudSun,
  faSmog,
  faMeteor,
  faCloudRain,
  faCloudShowersHeavy,
  faSnowflake,
  faIcicles
} from '@fortawesome/free-solid-svg-icons'

const getWeatherIcon = (condition) => {
  let icon;
  switch (condition) {
    case "Clear":
      icon = faCloud;
      break;
    case "Sunny":
      icon = faSun;
      break;
    case "Mist":
      icon = faCloudMeatball;
      break;
    case "Cloudy":
      icon = faCloud;
      break;
    case "Partly cloudy":
      icon = faCloudSun;
      break;
    case "Overcast":
      icon = faSmog;
      break;
    case "Blizzard":
      icon = faMeteor;
      break;
    case "Fog":
      icon = faSmog;
      break;
    case "Light rain":
      icon = faCloudRain;
      break;
    case "Medium rain":
      icon = faCloudRain;
      break;
    case "Heavy rain":
      icon = faCloudShowersHeavy;
      break;
    case "Light snow":
      icon = faSnowflake;
      break;
    case "Medium snow":
      icon = faSnowflake;
      break;
    case "Heavy snow":
      icon = faIcicles;
      break;
    default:
      icon = faCloud;
  }
  return icon;
};

const WeatherIcon = (props) => {
  return (
    <div>
      <FontAwesomeIcon
        icon={getWeatherIcon(props.condition)}
        className=".forecast-weather__icon"
      />
    </div>
  )
}

export default WeatherIcon
