import React from 'react';

class Newsletter extends React.Component {
	constructor() {
		super();
		this.state = [null];
	}
	render() {
		return (
			<div className='Newsletter text-center  py-3'>
				{/* <span className='font-weight-bold far fa-bell fa-2x mb-4 mt-1' />
				<div className='newsletter-product font-weight-bold fa-md'>With Product You Purchase</div>
				<div className='border-bottom  newsletter-width' />
				<div className=' h4 newsletter-Sub font-weight-light'>
					Subscribe to our mailing <br />
					list to get the new
					<br /> updates !!
				</div>
				<div className='newsletter-form mt-4'>
					<div class='input-group'>
						<span class='input-group-addon far fa-envelope mx-2' />
						<input type='text' class='form-control' />
					</div>
					<button type='button' className='btn btn-sm mt-3 text-danger z-depth-1 '>
						Subscribe
					</button>
				</div> */}
			</div>
		);
	}
}
export default Newsletter;
