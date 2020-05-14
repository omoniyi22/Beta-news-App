import React from 'react';
import './../singlePost/singlePost.css';
import './Advert.css';
const ads = require('./ads.jpg');

class Advert extends React.Component {
	constructor() {
		super();
		this.state = {};
	}
	render() {
		return (
			<div className='singlePost col-md-8 mt-2 pt-3  '>
				<div className='Post row border'>
					<div className='col-12 '>
						<div className='path small my-3'>
							{' '}
							<span className='fa fa-home' /> Home / Bετα / Advertise
						</div>
						<div className='author badge blue z-depth-0 mt-2'>{'BETA NEWS'}</div>
						<div className='title mt-2 h2'>Advertise </div>

						<div className='news details'>
							<div className='float-left'>
								<span className='fa fa-user fa-lg mr-1 mt-1 text-white blue-grey p-1 pt-2 lighten-3' />
							</div>
							<span className=' float-left mt-2 ml-0'>
								Bετα <span className='fab fa-twitter mx-1' />
								<span className='fa fa-envelope mr-3' />
								<span className='fa fa-clock' />
								<span> {new Date().toDateString()}</span>
							</span>
						</div>
					</div>
					<img src={ads} className='w-100 col-12 mt-3 px-0 border text-center POST_IMG' alt='POST_IMG' />
					<div className='content col-12 py-3 px-1 jumbotron'>
						<div className='card px-3 mx-1 my-2 py-4  Clist '>
							Advertise with Hettyosblog.com, the first mixed niche news website from a Nigerian woman’s
							perspective.
							<div className='thumbnail mt-3'>
								An advert on our platform drives needed attention to your goods & services in a country
								where family assets acquisition decisions are highly influenced by women.
							</div>
							<div className='thumbnail mt-3'>
								It pays to take advantage and give your brand awareness the needed boost. This is more
								so as global attention continues to focus on the world’s biggest black nation where
								women form 50% of the population.
							</div>
							<div className='thumbnail mt-3'>
								Hettyosblog.com provides up to the minute local and international news, reviews, fitness
								and wellness programmes, real life stories and interesting diaries about women.
							</div>
						</div>
						<div className=' px-3 mx-1 my-2 py-2 py-4 img-thumnail mt-4 lead text-center font-weight-bold'>
							CONTACT US : )
						</div>
						<div className='card Clist px-3 mx-1 my-2 py-2  mt-3 mb-5'>
							<div className='thumbnail mt-3'>
								<span className='button-link'>Hettyosblog Advertisement Unit:</span>
							</div>
							<ol className=' thumbnail mt-3'>
								<li className='mt-2'>Mobile No: +234 803 308 6663.</li>
								<li className='mt-2'>Email: hettyosblog@gmail.com ; henriettaolih@gmail.com.</li>
								<li className='mt-2'>
									10 Jesus Avenue, off Canaan Estate Road, Lekki/Epe Expressway, Sangotedo, Lagos.
								</li>
							</ol>
							<div className='mt-3'>Office Hours: 09:00am – 05:00pm GMT+1 (Monday – Saturday)</div>
						</div>
					</div>
					<div className='share col-12 px-4 mt-4' />
				</div>

				<div className='row about-betty border mt-4 py-0'>
					<div className='col-12 py-4 '>
						<div className='row pl-0'>
							<div className='float-left col-2'>
								<div className='fa fa-user fa-lg border-radius   Clist1 text-white px-2 pt-3' />
							</div>
							<div className='small col-10'>
								<span className='font-weight-bold'>Beta</span> <br />
								Beta is a columnist, astute marketer and customer relationship professional with over 2
								decades of experience. Her blog aims to motivate women to aspire to greatness
							</div>
						</div>
					</div>
				</div>
				<div className='row my-3 border'>
					<div className='col-md-6 '>
						<img className='col-12' />
						<span className='small col-12'>Chapter 3: Opoku Returns to See Vicky</span>
					</div>
					<div className='col-md-6 '>
						<img className='col-12 ' />
						<span className='small col-12'>Chapter 3: Opoku Returns to See Vicky</span>
					</div>
				</div>
				<div className='row'>
					<div className='col-12 mt-5'>
						<span className='related border-top pt-3'>Related:</span>
					</div>
					<div className='col-sm-4 related-one p-0 ml-1 '>
						<div className='border post-img embed-responsive '>
							<img className='embed' />
						</div>
						<div className='post-discription small'>
							Chioma Akpotha Honours Late Mum Chioma Akpotha Honours Late Mum
						</div>
						<div className='post-date small'>{new Date().toDateString()}</div>
					</div>
					<div className='col-sm-4 related-one p-0 ml-1 '>
						<div className='border post-img embed-responsive '>
							<img className='embed' />
						</div>
						<div className='post-discription small'>
							Chioma Akpotha Honours Late Mum Chioma Akpotha Honours Late Mum
						</div>
						<div className='post-date small'>{new Date().toDateString()}</div>
					</div>
					<div className='col-sm-4 related-one p-0 mr-1 '>
						<div className='border post-img embed-responsive '>
							<img className='embed' />
						</div>
						<div className='post-discription small'>
							Chioma Akpotha Honours Late Mum Chioma Akpotha Honours Late Mum
						</div>
						<div className='post-date small'>{new Date().toDateString()}</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Advert;
