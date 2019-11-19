import React from 'react';
import Main from './Main';

function Sliders() {
	const breakParam = [5,"break"];
	console.log(breakParam[0]);
	const sessionTime = 25;
	return (
		<div>
			<Main param={breakParam} />
			
		</div>
	);
}

export default Sliders;

//<Main time={sessionTime} />
