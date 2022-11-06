import React, { useContext } from "react";
import {
  UilWind,
  UilTear,
  UilTemperature,
  UilSun,
  UilSunset,
  UilTemperaturePlus,
  UilTemperatureEmpty,
} from "@iconscout/react-unicons";
import { weatherData } from "../context/WeatherDataContext";
import { iconUrlFromCode } from "../services/weatherService";
function TemperatureAndDetails() {
  const { weatherDataObj } = useContext(weatherData);
  return (
    <div>
      <div className="flex items-center justify-center text-violet-900 ру-6 text-xl font-bold">
        {weatherDataObj.details}
      </div>
      <div className="flex flex-row items-center justify-between text-white ру-3">
        <img
          src={iconUrlFromCode(weatherDataObj.icon)}
          alt=""
          className="w-20"
        />
        <p className={weatherDataObj.temp ? "text-5xl" : "text-xl"}>
          {weatherDataObj.temp
            ? `${Math.round(weatherDataObj.temp)}°`
            : "Loading..."}{" "}
        </p>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-left">
            <UilTemperature size={18} className="mr-1" />
            Real fell :
            <span className="font-medium ml-1">
              {Math.round(weatherDataObj.feels_like)}°
            </span>
          </div>
          <div className="flex font-light text-sm items-center justify-left">
            <UilTear size={18} className="mr-1" />
            Humidity :
            <span className="font-medium ml-1">{weatherDataObj.humidity}%</span>
          </div>
          <div className="flex font-light text-sm items-center justify-left">
            <UilWind size={18} className="mr-1" />
            Wind Speed :
            <span className="font-medium ml-1">
              {weatherDataObj.speed} km/h
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
        <UilSun />
        <p className="font-light">
          Rise: <span className="font-medium ml-1">06:29 AM</span>
        </p>
        <p className="font-light">|</p>
        <UilSunset />
        <p className="font-light">
          Set:<span className="font-medium ml-1">17:07 PM</span>
        </p>
        <p className="font-light">|</p>
        <UilTemperaturePlus />
        <p className="font-light">
          High:{" "}
          <span className="font-medium ml-1">
            {Math.round(weatherDataObj.temp_max)}°
          </span>
        </p>
        <p className="font-light">|</p>
        <UilTemperatureEmpty />
        <p className="font-light">
          Low:{" "}
          <span className="font-medium ml-1">
            {Math.round(weatherDataObj.temp_min)}°
          </span>
        </p>
      </div>
    </div>
  );
}

export default TemperatureAndDetails;
