import React from "react";
import "./App.css";
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import Forecast from "./components/Forecast";
import WeatherDataContext from "./context/WeatherDataContext";

const App = () => {
  return (
    <>
      <div className="mx-auto max-w-screen-md mt-2 py-5 px-32 bg-gradient-to-t from-purple-400 to-violet-800 h-fit shadow-xl shadow-gray-400 rounded-lg select-none">
        <WeatherDataContext>
          <TopButtons />
          <Inputs />
          <TimeAndLocation />
          <TemperatureAndDetails />
          <Forecast title="hourly forecast" />
          {/* <Forecast title="daily forecast" /> */}
        </WeatherDataContext>
      </div>
    </>
  );
};

export default App;
