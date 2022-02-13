import React from "react";
import ReactDOM from "react-dom";
import "./css/defaults.css";
import "./css/overides.css";
import "animate.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import App from "./app";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
