import React,{useContext} from "react";
import { weatherData } from "../context/WeatherDataContext";
function TimeAndLocation() {
  const {weatherDataObj}=useContext(weatherData);
  return (
    <div>
      <div className="flex items-center justify-center my-6">
        <div className="text-white text-lg font-extralight">{Date()}</div>
      </div>
      <div className="flex items-center justify-center my-3">
        <p className="text-white text-3xl font-medium">{weatherDataObj.country}, {weatherDataObj.name}</p>
      </div>
    </div>
  );
}

export default TimeAndLocation;
