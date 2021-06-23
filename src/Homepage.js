import React from "react";
import "./Homepage.css";
import Hero from "./Hero";
import Works from "./Works";
import Inquiry from "./Inquiry";
import Footer from "./Footer";

export default function Homepage() {
  return (
    <div className="homepage">
      <Hero />
      <div className="works">
        <p className="text-center mt-3">
          Check out some of my featured projects below
        </p>
        <Works />
      </div>
      <Inquiry />
      <Footer />
    </div>
  );
}
