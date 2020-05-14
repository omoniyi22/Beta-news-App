import React, { Component } from 'react';
import './News2.css';

class Menu extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		function A() {
			return (
				<div className='col-12 mb-2'>
					<div className='row'>
						<div className='category-menu col-10  mx-0'>
							<span className='font-weight-bold fa fa-bookmark fa-xs mr-2 ' />
							News - Women's Perspect
						</div>

						<div className='category-icon  w-auto float-right col-2 text-center ml- px-0'>
							<span className='border p-1'> 712</span>
						</div>
					</div>
				</div>
			);
		}
		return (
			<div className='category row mx-0 py-4'>
				<div className='col-12 font-weight-bold'>
					<span className='font-weight-bold fa fa-bookmark fa-md mr-3 mb-4 ' />
					CATEGORIES
				</div>
				<A />
				<A />
				<A />
				<A />
				<A />
				<A />
				<A />
				<A />
				<A />
				<A />
				<A />
			</div>
		);
	}
}
export default Menu;
