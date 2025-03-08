import React, { useEffect, useState } from "react";
import axios from "axios";

const Weather = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    axios.get("https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=London")
      .then(response => setWeather(response.data.current.temp_c))
      .catch(error => console.error("Weather API error:", error));
  }, []);

  return <p className="text-lg font-semibold">Current Weather: {weather ? `${weather}°C` : "Loading..."}</p>;
};

export default Weather;
