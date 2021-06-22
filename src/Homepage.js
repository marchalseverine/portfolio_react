import React from "react";
import "./Homepage.css";

export default function Homepage() {
  return (
    <div className="homepage">
      <div className="hero p-5">
        <p> 👋 Hi there, I am</p>
        <h1>Séverine Marchal</h1>
        <h2>Front-end developer based in Valencia, Spain</h2>
        <a href="/Contact">
          <button className="contact-btn shadow">Contact me</button>
        </a>
      </div>
      <div className="works">
        <div className="container">
          <div className="row">
            <div className="col-6 weather_app_img">Weather APP IMG</div>
            <div className="col-6">
              <h3 className="project_1_title">Weather APP</h3>
              <p>
                {" "}
                I entered the world of front-end development by gaining some
                knowledge in HTML, CSS, and JavaScript. I used my knowledge of
                these languages, along with my new skills in VS Code, to build a
                landing page about Yogurt. The page utilizes JavaScript
                functions to create user interaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
