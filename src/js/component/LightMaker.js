import React from "react";
import ReactDOM from "react-dom";

export const LightMaker = () => {
	return (
		<div>
			<div className="lightBody">
				<div className="rounded-circle redLight lightOnRed" />
				<div className="rounded-circle yellowLight " />
				<div className="rounded-circle greenLight " />
			</div>
			<div className="lightPole" />
			<div className="lightBase" />
		</div>
	);
};
