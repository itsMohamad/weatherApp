import React, { useContext, useState } from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
import { weatherData } from "../context/WeatherDataContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Inputs() {
  const { selectTemp, setSelectTemp, setSelectCity } = useContext(weatherData);
  const [cityName, setCityName] = useState("");
  const notify = (text) => toast.error(text, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
  const searchClickHandler = () => {
    if (cityName !== "") {
      setSelectCity(cityName);
    } else {
     notify("please enter a valid city name");
    }
  };
  return (
    <>
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
          onChange={(e) => setCityName(e.target.value)}
          placeholder="Search for city...."
          type="text"
          className="text-xl bg-purple-100 rounded-lg font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
        />
        <UilSearch
          onClick={searchClickHandler}
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
        />
        <UilLocationPoint
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
        />
      </div>
      <div className="flex flex-row w-1/4 items-center justify-center">
        <button
          onClick={() => setSelectTemp({ celcius: true, farenheit: false })}
          name="metric"
          className={
            !selectTemp.celcius
              ? "text-xl text-white font-light transition ease-out hover:text-indigo-200"
              : "text-indigo-200 font-light"
          }
        >
          °C
        </button>
        <p className="text-xl text-white mx-1">|</p>
        <button
          onClick={() => setSelectTemp({ celcius: false, farenheit: true })}
          name="imperial"
          className={
            !selectTemp.farenheit
              ? "text-xl text-white font-light transition ease-out hover:text-indigo-200"
              : "text-indigo-200 font-light"
          }
        >
          °F
        </button>
      </div>
    </div>
    <ToastContainer />
    </>
  );
}
