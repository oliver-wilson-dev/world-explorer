import React from "react";
import earth from "./earth.png";
import "./index.css";

const Logo = () => (
  <div className="logo">
    <img className="earth" src={earth} alt="planet earth" />
    <h1 className="app-name">World Explorer</h1>
  </div>
);

export default Logo;
