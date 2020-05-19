import React, { Component } from 'react';
import './signIn.css';
import jwt_decode from 'jwt-decode'
import { Link, withRouter } from 'react-router-dom';
import { login } from '../../ClientAPIs'

class SignIn extends Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: '',
			view: false
		};
		this.onChange = this.onChange.bind(this)
		this.onSubmit = this.onSubmit.bind(this)
		this.onView = this.onView.bind(this)
		this.clear = this.clear.bind(this)
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value })
	}

	onSubmit(e) {
		e.preventDefault()
		const users = {
			email: this.state.email,
			password: this.state.password
		}

		login(users).then(res => {
			if (res.error) {
				this.setState({ error: res.error })
			} else {
				const token = localStorage.usertoken;
				jwt_decode(token);
				this.props.history.push(`/`);
			}
		})
	}

	close() {
		this.setState({ error: null })
	}

	onView() {
		this.setState(prev => {
			return { view: !prev.view }
		})
	}

	clear() {
		this.setState({ email: "" })
	}

	render() {
		return (
			<form className='signIn col-12 px-0 py-5 mx-0' noValidate onSubmit={this.onSubmit}>
				<div className='h5 mb-3 w-100 text-center'>Bετα Νεws</div>
				<div className='col-md-8 col-sm-8 col-lg-7 reo z-depth-1'>
					<fieldset>
						<legend>
						</legend>
						<div className='h6 font-weight-light w-100 text-primary'>
							<div>Login</div>
							<div className='fa fa-sign-in-alt mr-0 ml-3 ' />
						</div>

						{this.state.error && <div className="alert alert-danger alert-dismissable fade show" role='alert'>
							<button type="button" className="close text-danger " onClick={this.close = this.close.bind(this)} aria-label="Close"
								aria-hidden="true">
								&times;
                        	</button>
							{this.state.error}
						</div>}

						<hr className='' />
						<div className='input-group border  px-0'>
							<span class='input-group-addon fa fa-user  px-2 ' />
							<input type='text' className='form-control mx-0 put border-right'
								onChange={this.onChange}
								name='email'
								value={this.state.email} />
							<span class='input-group-addon fa fa-backspace px-2 mt-1 ' onClick={this.clear} />

						</div>
						<div className='input-group border  px-0'>
							<span class='input-group-addon fa fa-lock px-2' />

							<input
								type={this.state.view ? 'text' : 'password'}
								class='form-control mx-0 put border-right'
								onChange={this.onChange}
								name='password'
								value={this.state.password} />
							{!this.state.view ? <span onClick={this.onView} className='input-group-addon fa fa-eye px-2' /> : <span onClick={this.onView} className='input-group-addon fa fa-eye-slash px-2' />}
						</div>

					</fieldset>
					<input type='submit' value='Login' className='form-control submit' />
					<div className='border mt-4 py-3 text-center Naccount'>
						New to Beta News?{' '}
						<Link className='ml-2 text-danger' to='/signUp'>
							Create an account
						</Link>
					</div>
				</div>
			</form>
		);
	}
}

export default withRouter(SignIn);
