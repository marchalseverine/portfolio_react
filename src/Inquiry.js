import React from "react";
import "./Inquiry.css";

export default function Inquiry() {
  return (
    <div className="inquiry">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h1>Work Inquiry</h1>
            <p>Let's work together</p>
          </div>
          <div className="col-6 ">
            <a href="mailto:marchalsevi@gmail.com">
              <button className="inquiry-btn">Contact Me</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
