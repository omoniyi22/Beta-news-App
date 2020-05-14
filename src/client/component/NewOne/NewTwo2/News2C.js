import React, { Component } from 'react';
import './News2.css';
const ads = require('../../Advert/ads.jpg');

class News2C extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className='advertisement  text-center'>
				{' '}
				<img src={ads} className='w-100 col-12 px-0 border text-center POST_IMG' alt='POST_IMG' />{' '}
			</div>
		);
	}
}
export default News2C;
