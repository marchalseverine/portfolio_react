import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero p-5">
      <h3 className="hero-p"> 👋 Hi there, I am</h3>
      <h1 className="hero-h1">Séverine Marchal</h1>
      <h2 className="hero-h2">Front-end developer based in Valencia, Spain</h2>
      <a href="/Contact">
        <button className="contact-btn shadow">Contact me</button>
      </a>
    </div>
  );
}
