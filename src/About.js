import React from "react";
import Undraw from "./undraw.svg";
import Inquiry from "./Inquiry";
import Footer from "./Footer";
import "./About.css";

export default function About() {
  return (
    <div className="About">
      <div className="container">
        <div className="row mt-5">
          <div className="col-6 mt-5">
            <h1>Hi, I am Séverine Marchal</h1>
            <h2>Front-end developer base in Valencia, Spain</h2>
            <p>
              I’m currently seeking new opportunities in front-end development.
              I’m open to work remotely and have flexible hours. I’m highly
              skilled in JavaScript and React.
            </p>
          </div>
          <div className="col-sm-6">
            <img
              src={Undraw}
              alt="logo"
              width="500px"
              className="about-img shadow p-5"
            />
          </div>
        </div>
      </div>
      <Inquiry />
      <Footer />
    </div>
  );
}
