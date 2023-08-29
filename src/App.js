import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        | Developed by{" "}
        <a target="_blank" href="https://github.com/Aditya-Raj16">
          Aditya Raj 
        </a>{" "}
        | Institute{" "}
        <a target="_blank" href="https://www.nitjsr.ac.in/">
          National Institue of Technology Jamshedpur
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;
