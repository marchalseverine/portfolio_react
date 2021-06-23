import React from "react";
import WeatherAppJS from "./WeatherAppJS";
import "./Works.css";
import WeatherAppReact from "./WeatherAppReact";
import DictionaryApp from "./DictionaryApp";

export default function Works() {
  return (
    <div className="works">
      <p className="text-center mt-3">
        Check out some of my featured projects below
      </p>
      <WeatherAppJS />
      <hr />
      <WeatherAppReact />
      <hr />
      <DictionaryApp />
    </div>
  );
}
