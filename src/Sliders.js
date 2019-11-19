import React from "react";
import Main from "./Main";

function Sliders() {
	const breakParam = { time: 5, labelParam: "break" };
	const sessionParam = { time: 25, labelParam: "session" };
	return (
		<div>
			<Main param={breakParam} />
			<Main param={sessionParam} />
		</div>
	);
}

export default Sliders;
