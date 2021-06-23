import React from "react";
import WeatherAppReactImg from "./weatherAppReact.png";

export default function WeatherAppReact() {
  return (
    <div className="weather-app react">
      <div className="container">
        <div className="row">
          <div className="app-text col-lg-6">
            <h3 className="weather-app-title ">Weather App React</h3>
            <p>
              {" "}
              I immersed myself in React development. I used my knowledge of
              this highly-demanded framework to build a working weather app
              incorporating coding best practices, along with the most popular
              tools and technologies.
            </p>
            <a
              href="https://blissful-mcnulty-6e69c0.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="app-btn">Learn More</button>
            </a>
          </div>
          <div className="weather-app-img col-lg-6">
            <img
              src={WeatherAppReactImg}
              alt="WeatherAppJS"
              className="img-fluid shadow w-100 d-none d-lg-block"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
