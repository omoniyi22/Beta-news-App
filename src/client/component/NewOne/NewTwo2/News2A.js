import React from 'react';
import './News2.css';
function News2A() {
	return (
		<div className='weather text-white'>
			{' '}
			<a
				class='weatherwidget-io'
				href='https://forecast7.com/en/7d383d95/ibadan/'
				data-label_1='IBADAN'
				data-label_2='WEATHER'
				data-theme='original'>
				IBADAN WEATHER
			</a>
		</div>
	);
}

export default News2A;
