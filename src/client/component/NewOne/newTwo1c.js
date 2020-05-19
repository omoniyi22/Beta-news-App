import React from 'react';
import './NewTwo.css';
import Moment from 'react-moment';

function NewsTwo1c(props) {
	return (
		// 		<div className='row '>
		// 			<div className='col-11 mx-0'>
		// 				<div className='timeline-main'>
		// 					<ul className='stepper stepper-vertical timeline colorful-timeline pl-0'>
		// 						<li className='timeline-inverted'>
		// 							<a href='#!' className=" rounded-lg">

		// 								<span className=" text-danger mr-1  rounded-pill z-depth-1-half ">
		// 									<span className='circle white lighten-1 z-depth-1-half'>
		// 										<i className='fas fa-heart text-danger' aria-hidden='true' />
		// 									</span>Comments
		// <span className='circle white lighten-1 z-depth-1-half ml-2 mr-0'>
		// 										<i className='fas fa-heart text-danger' aria-hidden='true' />
		// 									</span>
		// 								</span>

		// 							</a>

		<div className="col-sm-6  px-0 px-0 px-sm-0 px-md-1 py-sm-3 stepdown ">
			<div className="border rounded-lg">
				<div className='font-weight-light small timeline-header blue lighten-2 white-text p-2 pl-4'>
					<span className="fa fa-user user-comment mr-3" />	{props.user}
				</div>
				<div className='text-muted px-4 small w-100  mt-1 mb-2 pt-0  small'>
					<i className='far fa-clock tsm' aria-hidden='true ' /><span className="tsm"> <Moment fromNow>{props.date}</Moment></span>
				</div>
				<p className='mb-2 px-4 small tsm'>
					{props.comment}

				</p>
			</div>



		</div>






		// 					<a href='#!' className=" rounded-lg">



		// 					</a>
		// 				</li>



		// 				<li />
		// 			</ul>
		// 		</div>
		// 	</div>
		// </div >
	);
}
export default NewsTwo1c;
