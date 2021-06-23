import React from "react";
import "./Homepage.css";
import Hero from "./Hero";
import Works from "./Works";

export default function Homepage() {
  return (
    <div className="homepage">
      <Hero />
      <div className="works">
        <Works />
      </div>
    </div>
  );
}
