import React from "react";
import Main, { Stringify, Counter } from "./Main";

function Sliders() {
	const breakParam = { time: 5, labelParam: "break" };
	const sessionParam = { time: 25, labelParam: "session" };
	var backgroundStyle = {
		padding: 50,
		backgroundColor: "#FFC53A",
		width: 250,
		height: 100,
		borderRadius: 10,
		textAlign: "center",
		fontSize: 72,
		fontFamily: "sans-serif",
		fontWeight: "bold"
	};

	return (
		<div>
			<Stringify id="timer-label">{sessionParam.labelParam}</Stringify>
			<div id="time-left" style={backgroundStyle}>
				{sessionParam.time + ":00"}
			</div>
			<Main param={breakParam} />
			<Main param={sessionParam} />
			<Counter id="start_stop">start/stop</Counter>
			<Counter id="reset">reset</Counter>
		</div>
	);
}

export default Sliders;
