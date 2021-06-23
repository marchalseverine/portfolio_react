import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero p-5">
      <p> 👋 Hi there, I am</p>
      <h1>Séverine Marchal</h1>
      <h2>Front-end developer based in Valencia, Spain</h2>
      <a href="/Contact">
        <button className="contact-btn shadow">Contact me</button>
      </a>
    </div>
  );
}
