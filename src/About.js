import React from "react";
import Undraw from "./undraw.svg";

export default function About() {
  return (
    <div className="About">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <img
              src={Undraw}
              alt="logo"
              width="500px"
              className="about-img shadow mt-5 px-5 py-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
