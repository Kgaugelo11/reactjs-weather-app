import React, {useContext} from "react";
import WeatherIcon from "../common/WeatherIcon";
import WeatherContext from "../../../store/weatherContext";


const ForecastWeatherCard = () => {
  const weatherContext = useContext(WeatherContext);

  return (
    <div>
      <h2>Coming soon</h2>
      <WeatherIcon
        condition = {weatherContext.weather.condition}
      />
    </div>
  );
}

export default ForecastWeatherCard
