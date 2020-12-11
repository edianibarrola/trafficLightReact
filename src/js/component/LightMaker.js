import React, { useState } from "react";
import ReactDOM from "react-dom";

export const LightMaker = () => {
	const [clickedLight, setClickedLight] = useState(null);
	let turnOnRed = "";
	if (clickedLight == "red") turnOnRed = "lightOnRed";
	let turnOnYellow = "";
	if (clickedLight == "yellow") turnOnYellow = "lightOnYellow";
	let turnOnGreen = "";
	if (clickedLight == "green") turnOnGreen = "lightOnGreen";
	return (
		<div>
			<div className="lightBody">
				<div
					className={"rounded-circle redLight " + turnOnRed}
					onClick={() => setClickedLight("red")}
				/>
				<div
					className={"rounded-circle yellowLight " + turnOnYellow}
					onClick={() => setClickedLight("yellow")}
				/>
				<div
					className={"rounded-circle greenLight " + turnOnGreen}
					onClick={() => setClickedLight("green")}
				/>
			</div>
			<div className="lightPole" />
			<div className="lightBase" />
		</div>
	);
};
