//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import { LightMaker } from "./component/home";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";
let clickedLight = "";
const timerCount = () => {
	if (clickedLight == "red") {
		clickedLight = "green";
	} else if (clickedLight == "green") {
		clickedLight = "yellow";
	} else {
		clickedLight = "red";
	}
	ReactDOM.render(
		<LightMaker clickedLight={clickedLight} />,
		document.querySelector("#app")
	);
};

//render your react application

setInterval(timerCount, 1000);
