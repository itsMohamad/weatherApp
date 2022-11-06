import React, { createContext, useState, useEffect,useRef } from "react";
import getFormattedWeatherData from "../services/weatherService";
export const weatherData = createContext();
function WeatherDataContext({ children }) {
  const [weatherDataObj, setWeatherDataObj] = useState({});
  const [selectCity, setSelectCity] = useState("tehran");
  const [selectTemp, setSelectTemp] = useState({
    celcius: true,
    farenheit: false,
  });
  let units=useRef("");
 useEffect(()=>{
    if(selectTemp.celcius){
     units.current="metric"
    }else if(selectTemp.farenheit){

      units.current="imperial"
    }
  },[selectTemp,selectCity])
  const fetchWeather = async () => {
    const data = await getFormattedWeatherData({
      q: `${selectCity}`,
      units: units.current,
    });
    setWeatherDataObj(data);
  };
  useEffect(() => {
    fetchWeather();
  }, [selectCity,selectTemp]);
  return (
    <weatherData.Provider
      value={{ weatherDataObj, setSelectCity, selectTemp, setSelectTemp }}
    >
      {children}
    </weatherData.Provider>
  );
}

export default WeatherDataContext;
