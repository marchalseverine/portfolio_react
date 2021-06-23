import React from "react";
import WeatherAppJSImg from "./weatherAppJSImg.png";

export default function WeatherAppJS() {
  return (
    <div className="weather-app">
      <div className="container">
        <div className="row">
          <div className="weather-app-img col-lg-6">
            <img
              src={WeatherAppJSImg}
              alt="WeatherAppJS"
              className="img-fluid shadow w-100 d-none d-lg-block mt-5"
            />
          </div>
          <div className="app-text col-lg-6">
            <h3 className="app-title ">Weather App JavaScript</h3>
            <p>
              {" "}
              I entered the world of front-end development by gaining knowledge
              in HTML, CSS, and JavaScript. I also became skilled in Bootstrap,
              API’s, real-life development workflow, and hosting. I combined all
              of these skills to create a fully-functioning weather app.
            </p>
            <a
              href="https://blissful-mcnulty-6e69c0.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="app-btn">Learn More</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
