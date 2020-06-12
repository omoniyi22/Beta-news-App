import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import SmallNav from './SmallNav'
import { searched } from './../../Actions/postActions'
// import Search from './../searches/search'
import Result from './../searches/result'
import App from './../../App';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import './Nav.css';
import { stat } from 'fs';
const icon = require('./icon.png');

// let count

/* Set the width of the side navigation to 250px */
const sty = {
	transitionDuratin: "0.5s",
	transitionProperty: "min-width",
	minWidth: "500px"
}

/* Set the width of the side navigation to 0 */
const styl = {
	transitionDuratin: "0.5s",
	transitionProperty: "min-width",
	minWidth: "0"

}

class Nav extends Component {
	constructor() {
		super()
		this.state = {
			first_name: "",
			last_name: "",
			collapse: true,
			togsearch: true,
			s_input: '',
			l_input: ''
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
	onChange(e) {
		this.setState({ [e.target.name]: e.target.value.toLowerCase() })
	}

	Togsearch() {
		this.setState(prevState => {
			return {
				togsearch: !prevState.togsearch
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
	componentWillReceiveProps() {
		console.log(this.props.search)
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
				<div className='navbar navbar py-0  border-bottom mt-0 z-depth-0'>
					<div className='navbar-header pull-right h4-responsive mx-0'>
						<div className='navbar-brand sm-hidden mt-1 pl-0 mr-2 ml-md-4 font-wei border border-white  px-2 mr-2 rounded-lg'>
							<Link to='/' className=' font-wei px-1 sm-hidden   text-danger'>
								Bεᴛα Νεws
							</Link>

						</div>
						{this.state.togsearch ?

							<div className='navbar-brand mt-1 pl-0 mr-2 lg-hidden ml-md-4 font-wei border border-white  px-2 mr-2 rounded-lg'>
								<Link to='/' className=' font-wei px-1  text-danger'>
									Bεᴛα Νεws
							</Link>

							</div>
							: null}
						{/* <div class="  float-right sm-hidden  py-0 mx-0">
							<div class="nav-item  py-0   ">
								<input className="form-control ssa input-group py-0  float-left border-0 " />
								<div class="input-group-addon  eje white black-text  float-left pt-1 ">

									<div className="fa fa-search  px-2 text-danger" />
								</div>
							</div>
						</div> */}
						<div class="md-form my-0 float-right sm-hidden">
							<div className="input-group mt-2">
								<input placeholder="..search" type="text" class=" my-0" id="recipient-name" name="l_input"
									onKeyPress={(ee) => {
										if (ee.key === "Enter") {
											if (this.state.l_input != '') {

												this.props.searched(this.state.l_input)
												this.setState({
													l_input: ""
												})
											}

										}
									}}
									value={this.state.l_input}
									onChange={this.onChange.bind(this)} />
								<span class="input-group-addon    black-text   pt-1 " >
									{this.state.togsearch ? <span className="fa icofont-search gh  px-1 text-danger" onClick={
										() => {
											if (this.state.l_input != '') {
												this.setState(prevState => {
													return {
														togsearch: !prevState.togsearch
													};
												});
												this.props.searched(this.state.l_input)
												this.setState({
													l_input: ""
												})
											}
										}
									}

									/>
										: <span>
											{`${this.state.l_input}`.length > 0 ? <span className="fa icofont-search gh  px-1 text-danger " onClick={() => {
												if (this.state.l_input != '') {
													this.props.searched(this.state.l_input)
													this.setState({
														l_input: ""
													})
												}
											}} />
												:
												<li onClick={this.Togsearch.bind(this)}
													className='sm-hidden   py-2 rounded-lg  mr-0 ml-3 gh v font-weight-light  mt-2 text-danger collaspsed '>
													x
												</li>
											}
										</span>}
								</span>
							</div>
						</div>
					</div>
					{!this.state.togsearch &&
						<div class="md-form my-0 float-right lg-hidden">
							<div className="input-group mt-2">
								<input placeholder="..search"
									onKeyPress={(ee) => {
										if (ee.key === "Enter") {
											if (this.state.s_input != '') {

												this.props.searched(this.state.s_input)
												this.setState({
													s_input: ""
												})
											}

										}
									}}
									type="text" class=" my-0" id="recipient-name"
									name="s_input" value={this.state.s_input}
									onChange={this.onChange.bind(this)}
								/>
							</div>
						</div>
					}
					<ul className=' nav nav-tab z-depth-0 navbar-right navbar navbar-dark'>
						<li className='sm-hidden '>
							<Link
								to='/Advert'
								className='rounded-pill sm-hidden ml-0 mr-2 px-3 desk-link img-thumbmail img img-thumbnail desk-link'>
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

						<span className='rounded-pill  '>
							<div class="md-form my-0 float-right lg-hidden dst">
								<div className="input-group mt-0">
									<span class="input-group-addon    black-text   pt-1 ">
										{this.state.togsearch ?
											<span className="fa icofont-search gh  px-1 text-danger " onClick={this.Togsearch.bind(this)} />
											:
											<span className="fa icofont-search gh  px-1 text-danger " onClick={() => {
												if (this.state.s_input != '') {
													this.props.searched(this.state.s_input)
													this.setState({
														s_input: ""
													})
												}
											}} />

										}
									</span>
								</div>
							</div>


						</span>

						<span className='rounded-pill ml-2 '>

							{this.state.togsearch ? <li onClick={this.Collapsed.bind(this)}
								className='lg-hidden  ml-2 py-2 rounded-lg fa fa-bars    gh collaspsed '
							>
							</li>
								: <li onClick={this.Togsearch.bind(this)}
									className='lg-hidden   py-2 rounded-lg fa fa-times fa-lg   text-danger collaspsed '
								>
								</li>}
						</span>
					</ul>
				</div>

				{/* {!this.state.collapse && */}
				<div id="mySidenav" style={!this.state.collapse ? {
					width: "210px",
					transition: "width 0.5s"

				} : {
						width: "0px",
						transition: "width 0.5s"

					}} className=" mobile-naav border-right  position-fixed  mr-2 mt-0" >
					<SmallNav fun={this.Collapsed.bind(this)} />
				</div>
				{/* } */}

				{!this.state.togsearch &&
					<div className="mobile-naav z-depth-0  position-fixed  mr-2 mt-0" >
						<nav class="nav-menu navsmeu z-depth-0 d-lg-block">
							<nav class="navbar navbar-light whiteout navbar-1 z-depth-0  ">
								<div class="navbar-collapse  " id="navbarSupportedContent15">
									<ul class="navbar-nav mr-auto  z-depth-0 border-bottom ">
										<Result fun={this.Togsearch.bind(this)} />
									</ul>
									<ul class="navbar-nav mr-auto px-2  text-center z-depth-0 border-bottom ">
									</ul>
								</div>
							</nav>
						</nav>
					</div>
					// <Search fun={this.Togsearch.bind(this)} />
				}
			</div>
		);
	}
}

// var mapStatetoProps = state => ({
// 	search: state.posts.search
// });

export default connect(null, { searched })(withRouter(Nav));
