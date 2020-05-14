import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
	constructor() {
		super();
		this.state = {};
	}
	render() {
		return (
			<footer className='footer mt-5 text-center px-3 container-fluid'>
				<div className='row'>
					<div className='col-md-6  Footer-icon my-2'>Bετα Νεws</div>
					<div className='col-md-6 my-2'>
						Beta News is your everyday Nigeria Events, News and happenings, Fashion and Beauty,
						Entertainment, Lifestyle, Short Stories, Sports, "gist"
					</div>
				</div>
				<div className='row py-2'>
					<div className='col-md-6  my-2'>
						© Copyright 2019, All Rights Reserved | Hettyosblog | Powered by Barniweb
					</div>
					<div className='col-md-6 my-2 '>
						<span className='fab fa-instagram fa-lg mx-2' />
						<span className='fab fa-facebook fa-lg mx-2' />
						<span className='fab fa-whatsapp fa-lg mx-2' />
						<span className='fab fa-twitter fa-lg mx-2' />
						<span className='mx-2'>Home</span>
						<span className='mx-2'>Advertise</span>
						<span className='mx-2'>Terms of Use</span>
					</div>
				</div>
			</footer>
		);
	}
}
export default Footer;
