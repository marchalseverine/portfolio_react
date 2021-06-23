import React from "react";
import DictionaryAppImg from "./dictionary-app.png";

export default function DictionaryApp() {
  return (
    <div className="dictionary-app">
      <div className="container">
        <div className="row">
          <div className="app-img col-lg-6">
            <img
              src={DictionaryAppImg}
              alt="DictionaryApp"
              className="img-fluid shadow w-100 d-none d-lg-block mt-5"
            />
          </div>
          <div className="app-text col-lg-6 mt-3">
            <h3 className="app-title">Dictionary App React</h3>
            <p>
              {" "}
              I improved my skills in React development building a
              fully-functioning dictionary App. I used my knowledge of
              Bootstrap, API's, real-life development worflow and hosting,
              incorporating coding best practices, along with the most popular
              tools and technologies.
            </p>
            <a
              href="https://keen-pasteur-200331.netlify.app/"
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
