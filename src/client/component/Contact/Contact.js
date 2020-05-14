import React from 'react';
import './contact.css';
import { Link } from 'react-router-dom';
import { contact } from '../../ClientAPIs'

class Contact extends React.Component {
	constructor() {
		super();
		this.state = {
			first_name: '',
			last_name: '',
			email: '',
			subject: '',
			message: '',
			mg: ""
		};
		this.onChange = this.onChange.bind(this)
		this.onSubmit = this.onSubmit.bind(this)
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value })
	}

	onSubmit(e) {
		e.preventDefault()
		const users = {
			first_name: this.state.first_name,
			last_name: this.state.last_name,
			email: this.state.email,
			subject: this.state.subject,
			message: this.state.message
		}

		contact(users).then(res => {
			if (res) {
				this.setState({
					mg: res.mg
				})
			}
		})
		this.setState({
			first_name: '',
			last_name: '',
			email: '',
			subject: '',
			message: ''
		})
		console.log(this.state)
	}


	close() {
		this.setState({ mg: null })
	}

	render() {
		return (
			<div className='contact'>
				<div className='contact col-md-7 mx-1  px-1'>
					<div className='text-center h2 mb-3'> Get in touch</div>
					{this.state.mg && <div className="alert alert-primary alert-dismissable fade show col-sm-11 mbottm" role='alert'>
						<button type="button" className="close text-danger " onClick={this.close = this.close.bind(this)} aria-label="Close"
							aria-hidden="true">
							&times;
                        		</button>
						{this.state.mg}
					</div>}
					<div className='  mt-4 pt-4 pb-1   px-0 mx-0'>
						<form className='form row mx-1 pb-2 pt-2 px-0' onSubmit={this.onSubmit}>
							<div className='col-sm-6 mt-2'>
								<input placeholder='First Name' noValidate className='py-0 first-name w-100 form-control-small'
									name="first_name"
									value={this.state.first_name}
									onChange={this.onChange}
									required />
							</div>

							<div className='col-sm-6 mt-2'>
								<input placeholder='Last Name' className='last-name w-100 form-control-small'
									name='last_name'
									onChange={this.onChange}
									value={this.state.last_name}
									required />
							</div>

							<div className='col-sm-12 mt-2'>
								<input placeholder='Email' className='last-name w-100 form-control-small'
									name='email'
									onChange={this.onChange}
									value={this.state.email}
									required />

							</div>
							<div className='col-sm-12 mt-2'>
								<input placeholder='Subject' className='last-name w-100 form-control-small'
									name='subject'
									onChange={this.onChange}
									value={this.state.subject}
									required />
							</div>
							<div className='col-sm-12 mt-3'>
								<textarea placeholder='Message' className='Message w-100 form-control-small'
									name='message'
									onChange={this.onChange}
									value={this.state.message}
									required />
							</div>
							<div className='col-sm-12  '>
								<button className=' float-right mt-4 btn-sm btn mr-0 light-blue text-white px-3 radius'>
									Send <span className='fa fa-paper-plane pl-1' />
								</button>
							</div>
							<div className='col-sm-12' />
						</form>
					</div>
				</div>
			</div>
		);
	}
}
export default Contact;
