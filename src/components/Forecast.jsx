import React from "react";
import { iconUrlFromCode } from "../services/weatherService";

function Forecast({ title }) {
  return (
    <div>
      <div className="flex items-center justify-start my-6">
        <p className="text-white font-medium uppercase">{title}</p>
      </div>
      <hr className="my-2" />
      <div className="flex flex-row items-center justify-between text-white">
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">00:00 AM</p>
          <img
            className="w-12 my-1"
            src={iconUrlFromCode("03d")}
            alt="forecast"
          />
          <p className="font-medium">22</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">06:00 AM</p>
          <img
            className="w-12 my-1"
            src={iconUrlFromCode("02d")}
            alt="forecast"
          />
          <p className="font-medium">16</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">09:00 AM</p>
          <img
            className="w-12 my-1"
            src={iconUrlFromCode("01d")}
            alt="forecast"
          />
          <p className="font-medium">18</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">12:00 PM</p>
          <img
            className="w-12 my-1"
            src={iconUrlFromCode("01d")}
            alt="forecast"
          />
          <p className="font-medium">20</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">21:00 PM</p>
          <img
            className="w-12 my-1"
            src={iconUrlFromCode("03d")}
            alt="forecast"
          />
          <p className="font-medium">22</p>
        </div>
      </div>
    </div>
  );
}

export default Forecast;
