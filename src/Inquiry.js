import React from "react";
import "./Inquiry.css";

export default function Inquiry() {
  return (
    <div className="inquiry">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <h1 className="inquiry-text-h1">Work Inquiry</h1>
            <p className="inquiry-text-p">Let's work together</p>
          </div>
          <div className="col-sm-6 ">
            <a href="mailto:marchalsevi@gmail.com">
              <button className="inquiry-btn">Contact Me</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
