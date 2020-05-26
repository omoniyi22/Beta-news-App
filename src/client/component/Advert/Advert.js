import React from 'react';
import './../singlePost/singlePost.css';
import './Advert.css';
import NewTwo1b from './../NewOne/NewTwo1b'

const ads = require('./ads.jpg');

class Advert extends React.Component {
	constructor() {
		super();
		this.state = {};
	}
	render() {
		return (
			<div className='singlePost col-md-8   '>
				<div className='Post row '>
					<div className='col-12 '>
						<div className='path small my-3'>
							{' '}
							<span className='fa fa-home' /> Home / Bετα / Advertise
						</div>
						<div className='author badge blue z-depth-0 mt-2'>{'BETA NEWS'}</div>
						<div className='title mt-2 h4'>Advertise Your Product</div>

						<div className='news details'>
							<div className='float-left'>
								<span className='fa fa-user fa-lg mr-1 mt-1 text-white blue-grey p-1 pt-2 lighten-3' />
							</div>
							<span className=' float-left mt-2 ml-0'>
								Bετα
								<a href={`https://twiter.com/share?=${window.location.href}`} target="_blank" className="black-text">

									<span className='ml-2 fab fa-twitter  loooe' /></a>
								<a href="mailto:omoniyioluwaseun22@gmail.com">
									<span><span className='fa fa-envelope loooe   ml-2 mr-3' /></span></a>
								<span className='fa fa-clock  text-danger g' />

								<span> {new Date().toDateString()}</span>
							</span>
						</div>
					</div>
					<img src={ads} className='w-100  mt-3 px-0 border text-center' alt='POST_IMG' />
					<div className='content col-12 py-3 px-1 jumbotron'>
						<div className='card px-3 mx-1 my-2 py-4  Clist '>
							Advertise with BetaNews.com.ng, the first mixed niche news website that offer
							offers several advertising options including Geo-locations advertizing,
							full-page and fractional
							 ads, inserts,
							 onserts and custom programs. The funding recieved is used to generate more traffic(viewers)
							  in essence promote all products on our advert lists
							<div className='thumbnail mt-3'>
								An advert on our platform drives needed attention to your goods & services in a country
								where family assets acquisition decisions are highly influenced by women.
							</div>
							<div className='thumbnail mt-3'>
								It pays to take advantage and give your brand awareness the needed boost. This is more
								so as global attention continues to focus on the world’s biggest black nation.
							</div>
							<div className='thumbnail mt-3'>
								BetaNews.com.ng provides up to the minute local and international news, reviews, fitness
								and wellness programmes, real life stories and interesting diaries about women.
							</div>
						</div>
						<div className='card Clist px-3 mx-1 my-2 py-2  mt-3 mb-5'>
							<div className='thumbnail mt-3'>
								<span className='button-link'>We Accept:</span>
							</div>
							<ol className=' thumbnail mt-3'>
								<li className='mt-1'>Animated or static GIF.</li>
								<li className='mt-1'>JPG image file banner.</li>
								<li className='mt-1'>An audio creative must have an on/off button, or a mouse-over.</li>
								<li className='mt-1'>May contain HTML, Flash, GIF and simple JavaScript.</li>
								<li className='mt-1'>Flash: Adobe Flash version 8 animation (SWF incl. GIF backup).</li>
								<li className='mt-1'>Each creative must be delivered as a SWF(Flash Player File) with the clicktag action for measuring clicks according Industry Standard.</li>
								<li className='mt-1'>Animation loop unlimited.</li>
								<li className='mt-1'>Alt text maximum 128 characters.</li>
								<li className='mt-1'>An active clickthrough/ URL must be provided for each creative.</li>
								<li className='mt-1'> Actionscript should look like (Flash 8 Action Script version).</li>
								<li className='mt-1'> ActionScript 3 is not supported!</li>

							</ol>
							<div className='mt-3'> Deadline delivery All standards ads must be provided three (3) business days before the campaign start date. </div>
							<div className='mt-2'>  NOTE:? <br />News Ghana (NewsGhana.com.gh) has the right, without any further explanation or motivation, to refuse or reject advertisements, without incurring any liability for damages towards the client. </div>
						</div>
						<div className=' px-3 mx-1 my-2 py-2 py-4 img-thumnail mt-4 lead text-center font-weight-bold'>
							CONTACT US : )
						</div>
						<div className='card Clist px-3 mx-1 my-2 py-2  mt-3 mb-5'>
							<div className='thumbnail mt-3'>
								<span className='button-link'>Beta News Advertisement Unit:</span>
							</div>
							<ol className=' thumbnail mt-3'>
								<li className='mt-2'>Mobile No: +234 810 505 5868.</li>
								<li className='mt-2'>Email:omoniyioluwaseun22@gmail.com ; omoniyioluwaseun00@gmail.com.</li>
								<li className='mt-2'>
									34 Kuffo Street, off I.B.T.C Bus-stop, Ayobo, Lagos.
								</li>
							</ol>
							<div className='mt-3'>Office Hours: 09:00am – 05:00pm GMT+1 (Monday – Saturday)</div>
						</div>
					</div>
					<div className='share col-12 px-4 mt-4' />
				</div>

				<div className='row about-betty border mt-4 py-0 mx-0 white'>
					<div className='col-12 py-2 '>
						<div className='row pl-0'>
							<div className='float-left col-2'>
								<div className='fa fa-user fa-lg border-radius  blue-grey lighten-3 text-white px-1 pt-2' />
							</div>
							<div className='small col-md-10 col-sm-12 my-sm-3'>
								<span className='font-weight-bold ml-2'>Seun</span> <br />
								<span className="">
									Seun is a software developer, astute marketer and customer relationship professional with over 2
									decades of experience. His blog aims to motivate people to aspire to greatness
												</span>
							</div>
						</div>
					</div>
				</div>
				{/* <div className='row my-3 border'>
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
				</div> */}
				<NewTwo1b />

			</div>
		);
	}
}
export default Advert;
