import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="mail text-center mt-5">
        <h3>
          {" "}
          <a href="mailto:marchalsevi@gmail.com">marchalsevi@gmail.com </a>
        </h3>
      </div>
      <p className="footer-p text-center mt-5">
        This website was coded by Séverine Marchal
        <br /> hosted in <a href="https://www.netlify.com/">Netlify</a> and open
        source on{" "}
        <a href="https://github.com/marchalseverine/portfolio_react">GitHub</a>
      </p>
    </div>
  );
}
