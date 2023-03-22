import React from "react"

const WeatherContext = React.createContext({
  weather: {},
  location: ""
});

export default WeatherContext;