import React, { Component } from 'react';
import './footer.css';
import { Link } from 'react-router-dom'

class Footer extends Component {
	constructor() {
		super();
		this.state = {};
	}
	render() {
		return (
			<footer className='footer mt-5 text-center px-3 container-fluid'>
				<div className='row'
				>
					<div className='col-md-6 text-uppercase  my-2'>
						<Link className="text-white" to={"/"}>Bετα Νεws</Link>
					</div>
					<div className='col-md-6 my-2 sm-hidden'>
						Beta News is your everyday Nigeria Events, News and happenings, Fashion and Beauty,
						Entertainment, Lifestyle, Short Stories, Sports, "gist"
					</div>
				</div>
				<div className='row py-2'>
					<div className='col-md-6  my-2'>
						© Copyright 2020, All Rights Reserved | Beta-News | Powered by Beta-Tech
					</div>
					<div className='col-md-6 my-2 '>
						<a href="https://m.me/seun.omoniyi.1804">
							<span className='fab fa-facebook-messenger fa-lg mx-2 text-white' /></a>
						<a href="https://wwww.instagram.com/seun2322">
							<span className='fab fa-instagram fa-lg mx-2 text-white' /></a>
						<a href="https://wa.link/7ke9z7">
							<span className='fab fa-whatsapp fa-lg mx-2 text-white' /></a>
						<span className='fab fa-twitter fa-lg mx-2' />
						<span className='mx-2'>
							<Link className="text-white" to={"/"}>Bετα Νεws</Link>
						</span>
						<span className='mx-2'>
							<Link className="text-white" to={"/advert"}>	Advertise</Link>
						</span>
						{/* <span className='mx-2'>Terms of Use</span> */}
					</div>
				</div>
			</footer>
		);
	}
}
export default Footer;
