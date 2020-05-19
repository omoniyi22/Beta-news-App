import React, { Component } from 'react';
import './sign.css';
import { Link, withRouter } from 'react-router-dom';
import { register } from './../../ClientAPIs'
// import Alert from '../Alert'
import Advert from '../Advert/Advert';
const first_img = require('./image-2.jpg');

class Sign extends Component {
	constructor() {
		super()
		this.state = {
			first_name: "",
			last_name: "",
			email: "",
			password: "",
			password2: "",
			user_email: "",
			phone: "",
			error: "",
			error1: "",
			error2: "",
			error3: ""
		}
		this.onChange = this.onChange.bind(this)
	}
	onChange(e) {
		this.setState({ [e.target.name]: e.target.value })
	}
	onSubmit(e) {
		e.preventDefault();

		const user = {
			first_name: this.state.first_name,
			last_name: this.state.last_name,
			email: this.state.email,
			password: this.state.password,
			password2: this.state.password2,
			user_email: this.state.user_email,
			phone: this.state.phone
		};

		register(user)
			.then(res => {
				console.log(res);
				if (res.mg) {
					this.props.history.push('/signin')
				} else {
					if (res[0]) {
						this.setState({
							error: res[0].msg,

						})
					}
					if (res[1]) {
						console.log(res[1].msg)
						this.setState({
							error1: res[1].msg,

						})
					}
					if (res[2]) {
						this.setState({
							error2: res[2].msg,
						})
					}
					if (res[3]) {
						this.setState({
							error3: res[3].msg,
						})
					}
				}

			})
	}

	close() {
		this.setState({ error: null })
	}

	close1() {
		this.setState({ error1: null })
	}

	close2() {
		this.setState({ error2: null })
	}

	close3() {
		this.setState({ error3: null })
	}

	render() {

		return (
			<div className='my-3 mx-auto mx-0 py-0'>
				<form className='forms jumbotron col-md-12 my-5 mx-0 z-depth-1 px-3 blue- mx-0 px-0 pt-1 pb-3' noValidate onSubmit={this.onSubmit.bind(this)
				}>
					<div className='Form-intro  my-2'>
						<img alt='' className='mr-3 img-circle ' src={first_img} />
						<span className='mt-3 ssk font-weight-light text-primary'>ENJOY EVERY MOMENT WITH US</span>
					</div>

					<div className='dropdown-divider' />
					<div className='Form-intro mt-2 mb-1'>
						<img alt='' className='mr-3 img-circle ' src={first_img} />
						<span className='mt-3 h6 font-weight-light ssk'>Sign up with BETA news</span>
					</div>

					<div className='dropdown-divider' />

					{this.state.error && <div className="alert alert-danger alert-dismissable fade show" role='alert'>
						<button type="button" className="close text-danger " onClick={this.close = this.close.bind(this)} aria-label="Close"
							aria-hidden="true">
							&times;
                        </button>
						{this.state.error}
					</div>}

					{this.state.error1 && <div className="alert alert-danger alert-dismissable fade show" role='alert'>
						<button type="button" className="close text-danger " onClick={this.close1 = this.close1.bind(this)} aria-label="Close"
							aria-hidden="true">
							&times;
                        </button>
						{this.state.error1}
					</div>}

					{this.state.error2 && <div className="alert alert-warning alert-dismissable fade show" role='alert'>
						<button type="button" className="close text-danger " onClick={this.close2 = this.close2.bind(this)} aria-label="Close"
							aria-hidden="true">
							&times;
                        </button>
						{this.state.error2}
					</div>}

					{this.state.error3 && <div className="alert alert-warning alert-dismissable fade show" role='alert'>
						<button type="button" className="close text-danger " onClick={this.close3 = this.close3.bind(this)} aria-label="Close"
							aria-hidden="true">
							&times;
                        </button>
						{this.state.error3}
					</div>}


					<div className=' px-2 py-1 img-thumbnail custom-control-inline w-100 white '>
						<input placeholder='First Name' className='name w-50  ssk img-thumbnail '
							onChange={this.onChange}
							name="first_name" />
						<input placeholder='Last Name' className='name  ssk img-thumbnail w-50 '
							onChange={this.onChange}
							name="last_name" />
					</div>
					<div className=' px-2 py-2 my-2 img-thumbnail  w-100 white '>
						<input placeholder='Username' className='name w-100  ssk img-thumbnail '
							onChange={this.onChange}
							name="email" />
						<div className='dropdown-divider mb-2' />

						<input placeholder='Password' type='password' className='name mb-1  ssk img-thumbnail w-100 '
							onChange={this.onChange}
							name="password" />
						<input placeholder='Confirm Password' type='password' className='name  ssk img-thumbnail w-100 '
							onChange={this.onChange}
							name="password2" />
					</div>
					<div className=' px-2 py-1 my-1 img-thumbnail w-100 white '>
						<input placeholder='Email' className='name w-100  ssk img-thumbnail '
							onChange={this.onChange}
							name="user_email"
						/>
						<div className='dropdown-divider mb-2' />
						<input placeholder='Phone No. (optional)' type='number' className='name  ssk img-thumbnail w-100 '
							onChange={this.onChange}
							name="phone"
						/>
					</div>
					<button type="submit"
						className='btn py-2 blue-gradient ml-0 z-depth-0 img-thumbnail w-100 white mb-3 '>
						<span className='ml-2 blue-gradient fa fa-paper-plane img-thumbnail fa-md' />
					</button>
					<span className='small mt-3'>
						You have an Account ?{' '}
						<Link className='text-danger underline' to='/Signin'>
							Login in
					</Link>
					</span>
				</form>
			</div>
		);
	}
}
export default withRouter(Sign);
