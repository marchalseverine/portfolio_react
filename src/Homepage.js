import React from "react";
import "./Homepage.css";

export default function Homepage() {
  return (
    <div className="homepage">
      <div className="hero p-5 shadow">
        <p> 👋 Hi there, I am</p>
        <h1>Séverine Marchal</h1>
        <h2>Front-end developer based in Valencia, Spain</h2>
        <button className="contact-btn">
          <a href="/Contact">Contact me</a>
        </button>
      </div>
    </div>
  );
}
