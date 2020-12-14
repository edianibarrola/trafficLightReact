import React, { useState } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

export const LightMaker = props => {
	let turnOnRed = "";
	if (props.clickedLight == "red") turnOnRed = "lightOnRed";
	let turnOnYellow = "";
	if (props.clickedLight == "yellow") turnOnYellow = "lightOnYellow";
	let turnOnGreen = "";
	if (props.clickedLight == "green") turnOnGreen = "lightOnGreen";

	console.log(props.clickedLight);

	return (
		<div>
			<div className="sky">
				<div className="lightBody">
					<div
						className={"rounded-circle redLight " + turnOnRed}
						//onClick={() => setClickedLight("red")}
					/>
					<div
						className={"rounded-circle yellowLight " + turnOnYellow}
						//onClick={() => setClickedLight("yellow")}
					/>
					<div
						className={"rounded-circle greenLight " + turnOnGreen}
						//onClick={() => setClickedLight("green")}
					/>
				</div>
				<div className="lightPole" />
				<div className="lightBase" />
				<div className="ground" />
			</div>
		</div>
	);
};
LightMaker.propTypes = {
	clickedLight: PropTypes.string
};
