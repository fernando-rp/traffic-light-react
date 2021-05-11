import React, { useState } from "react";

//include images into your bundle

//create your first component
export function TrafficLight() {
	const [red, setred] = useState("red");
	const [yellow, setyellow] = useState("yellow");
	const [green, setgreen] = useState("green");

	return (
		<div className="container">
			<div className="poste"> </div>
			<div className="traffic-light">
				<div
					className="color"
					id={red}
					onClick={() => {
						setred("red-light");
						setyellow("yellow");
						setgreen("green");
					}}></div>
				<div
					className="color"
					id={yellow}
					onClick={() => {
						setyellow("yellow-light");
						setred("red");
						setgreen("green");
					}}></div>
				<div
					className="color"
					id={green}
					onClick={() => {
						setgreen("green-light");
						setred("red");
						setyellow("yellow");
					}}></div>
			</div>
		</div>
	);
}
