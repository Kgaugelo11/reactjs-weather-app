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
  faIcicles,
  faThunderstorm,
} from '@fortawesome/free-solid-svg-icons'

const getWeatherIcon = (condition) => {
  let icon;
  switch (condition) {
    case "clear sky":
      icon = faSun;
      break;
    case "sunny":
      icon = faSun;
      break;
    case "mist":
      icon = faCloudMeatball;
      break;
    case "scattered clouds":
      icon = faCloud;
      break;
    case "few clouds":
      icon = faCloudSun;
      break;
    case "overcast clouds":
      icon = faSmog;
      break;
    case "Blizzard":
      icon = faMeteor;
      break;
    case "fog":
      icon = faSmog;
      break;
    case "light rain":
      icon = faCloudRain;
      break;
    case "moderate rain":
      icon = faCloudRain;
      break;
    case "heavy intensity rain":
      icon = faCloudShowersHeavy;
      break;
    case "light snow":
      icon = faSnowflake;
      break;
    case "moderate  snow":
      icon = faSnowflake;
      break;
    case "heavy snow":
      icon = faIcicles;
      break;
    case /.*thunderstorm.*/i:
      icon = faThunderstorm;
      break;
    case "broken clouds":
      icon = faSmog;
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
        className={"weather-icon"}
      />
    </div>
  );
}

export default WeatherIcon
