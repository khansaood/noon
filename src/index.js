import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Mainheader from "./header/Mainheader";
import Mainmiddle from "./middle/Mainmiddle";
import reportWebVitals from "./reportWebVitals";
import Footer from './bottom/Mainbottom'

ReactDOM.render(
  <>
    <Mainheader />
    <Mainmiddle />
    <Footer />
  </>,
  document.getElementById("root")
);

reportWebVitals();
