import React from 'react';
import News2A from './NewTwo2/News2A';
import News2B from './NewTwo2/News2B';
import News2C from './NewTwo2/News2C';
import MostViewed from './NewTwo2/MostViewed';
import Newsletter from './NewTwo2/Newsletter';
import Menu from './NewTwo2/Menu';

function NewTwo2() {
	return (
		<div className='col-lg-4 pl-md-5 side-size mt-4'>
			<div className='row'>
				<div className='lighten-1 col-md-12 px-0'>
					<News2A />
				</div>
				<div className='grade lg-hidden z-depth-1 lighten-1 col-md-12 mt-4'>
					<News2C />
				</div>
				<div className=' lighten-1 col-md-12 mt-4 bn-md'>
					<News2B />
				</div>
				<div className='grade z-depth-1 lighten-1 col-md-12 mt-4'>
					<News2C />
				</div>
				<div className='border-md lighten-1 col-md-12 mt-4  '>
					<MostViewed />
				</div>
				<div className='grade z-depth-1 lighten-1 col-md-12 mt-4'>
					<News2C />
				</div>
				<div className='lighten-1 border col-md-12 mt-4 grade'>
					<Newsletter />
				</div>
				<div className='lighten-1 border col-md-12 mt-4'>
					<Menu />
				</div>
			</div>
		</div>
	);
}

export default NewTwo2;
