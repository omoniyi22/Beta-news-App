import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import SmallNav from './SmallNav'
import App from './../../App';
import './Nav.css';
const icon = require('./icon.png');

class Nav extends Component {
	constructor() {
		super()
		this.state = {
			first_name: "",
			last_name: "",
			collapse: true
		}
	}

	async componentDidMount() {
		const token = await localStorage.usertoken
		if (token === undefined) {
			this.setState({
				first_name: "",
				last_name: ""
			})
		} else {
			const decode = jwt_decode(token)
			this.setState({
				first_name: decode.first_name,
				last_name: decode.last_name
			})
		}
	}


	Collapsed() {
		this.setState(prevState => {
			return {
				collapse: !prevState.collapse
			};
		});
	}

	logOut(e) {
		this.setState({
			first_name: "login"
		})
		e.preventDefault()
		localStorage.removeItem('usertoken');
		this.props.history.push('/');
		console.log(this.state.first_name);
	}
	render() {
		const DSignOut = (
			<a
				className='sm-hidden ml-0 mx-2 px-3 img-thumbmail img img-thumbnail desk-link'
				href="" onClick={this.logOut.bind(this)}>
				Logout
			</a>
		)
		const MSignOut = (
			<Link onclick={this.logOut.bind(this)}>
				<div
					className='mobile-menu px-4 py-3  border-bottom'
					data-toggle='collapse'
					data-target='#nav-menu'
					aria-expanded='false'>
					SIGN OUT
			</div>
			</Link>
		)
		return (
			<div className='border-bottom pb-0 peach z-depth-1'>
				<div className='navbar navbar py-1  border-bottom mt-0 z-depth-0'>
					<div className='navbar-header pull-right h4-responsive mx-0'>
						<div className='navbar-brand mt-1 pl-0 mr-2 ml-md-4 font-wei border  px-2 mr-2 rounded-lg'>
							<Link to='/' className=' font-wei px-1  text-danger'>
								Bετα Νεws
							</Link>
						</div>
					</div>

					<ul className=' nav nav-tab z-depth-0 navbar-right navbar navbar-dark'>
						<li className='sm-hidden '>
							<Link
								to='/Advert'
								className='rounded-pill sm-hidden ml-0 mx-2 px-3 desk-link img-thumbmail img img-thumbnail desk-link'>
								{' '}
								Place Ads{' '}
							</Link>
						</li>
						<li className='sm-hidden '>
							<Link
								className=' rounded-pill sm-hiddennavbar-toggler-icon ml-0 mx-2 px-3 img-thumbmail img img-thumbnail desk-link'
								to='/Contact'>
								{' '}
								Contact{' '}
							</Link>
						</li>
						<li className='sm-hidden  ' />
						<li className='sm-hidden '>

							{localStorage.usertoken ? DSignOut :
								<Link
									className='rounded-pill sm-hidden ml-0 mx-2 px-3 img-thumbmail img img-thumbnail desk-link'
									to='/SignUp'>
									Sign Up <span className='arrow small fa fa-arrow-circle-right ' />
								</Link>}

						</li>

						{/* 
						<li class="dropdown">
							<a href="#" data-toggle="dropdown">
							</a>
							<ul class="dropdown-menu drop-left">
								<li><a href="#">jmeter</a></li>
								<li><a href="#">EJB</a></li>
								<li><a href="#">Jasper Report</a></li>
								<li className="divider"></li>
								<li><a href="#">Separated link</a></li>
								<li class="divider"></li>
								<li><a href="#">One more separated link</a></li>
							</ul>

						</li>  */}

						{/* <Link href="#" className="tooltip-destroy" to="/signin" data-toggle="tooltip"
							title={localStorage.usertoken ? "login" : 'this.state.first_name'}>
							<img src={icon} className='use text-white sm-hidden ml-3 my-1 px-1 fa fa-user-alt fa-lg' />
						</Link>
						{localStorage.usertoken ? this.state.first_name : "logo"}
						
						*/}

						<span className='rounded-pill '>
							<li onClick={this.Collapsed.bind(this)}
								className='lg-hidden   py-2 rounded-lg icofont-navigation-menu   gh collaspsed '
							>
							</li>
						</span>
					</ul>
				</div>

				{!this.state.collapse &&
					<SmallNav fun={this.Collapsed.bind(this)} />
				}
			</div>
		);
	}
}
export default withRouter(Nav);
