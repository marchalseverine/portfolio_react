import React from "react";
import WeatherAppJS from "./WeatherAppJS";
import "./Works.css";
import WeatherAppReact from "./WeatherAppReact";
import DictionaryApp from "./DictionaryApp";

export default function Works() {
  return (
    <div className="works">
      <WeatherAppJS />

      <WeatherAppReact />

      <DictionaryApp />
    </div>
  );
}
