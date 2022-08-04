//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";
import SimpleCounter from "./component/home.jsx";


let Counter = 0;
setInterval(function(){
const Six = Math.floor(Counter/100000);
const Five = Math.floor(Counter/10000);
const Four = Math.floor(Counter/1000);
const Three = Math.floor(Counter/100);
const Two = Math.floor(Counter/10);
const One = Math.floor(Counter/1);
Counter++;



ReactDOM.render(<SimpleCounter digitOne={One} digitTwo={Two} digitThree={Three} digitFour={Four} digitFive={Five} digitSix={Six}/>, document.querySelector("#app"));
}, 1000);