import React, { useContext } from "react";
import { weatherData } from "../context/WeatherDataContext";

export default function TopButtons() {
  const { setSelectCity } = useContext(weatherData);
  const cities = [
    {
      id: 1,
      title: "Ramsar",
    },
    {
      id: 2,
      title: "Tehran",
    },
    {
      id: 3,
      title: "Chaboksar",
    },
    {
      id: 4,
      title: "Karaj",
    },
  ];
  return (
    <>
      <div className="flex items-center justify-around my-6">
        {cities.map((city) => (
          <div
            onClick={() => setSelectCity(city.title)}
            className="text-white text-lg font-medium cursor-pointer hover:ring-2 ring-purple-500 rounded-lg p-1 transition ease-out  hover:scale-125 hover:text-gray-200"
            key={city.id}
          >
            {city.title}
          </div>
        ))}
      </div>
    </>
  );
}
