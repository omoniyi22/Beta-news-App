import React from 'react';
import './singlePost.css';
import axios from 'axios'
import Moment from 'react-moment';
import NewsTwo1c from './../NewOne/newTwo1c'
import NewTwo1b from './../NewOne/NewTwo1b'
import renderHTML from 'react-render-html'
const ad = require('./imag.gif');
// importfrom 'react-render-html'

class SinglePost extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			prop: this.props.prod.replace('+', "/"),
			loading: false,
			posts: {},
			error: ''
		};
	}
	componentDidMount() {
		let url = `/news/${this.state.prop}`
		console.log(url)
		axios(url).then(res => {
			console.log(res)
			this.setState({
				posts: res.data,
				loading: true
			})
		})
	}
	render() {
		let { title, type, description, content, comments, views, picture, date } = this.state.posts
		return (
			<>
				{!this.state.loading ?
					<div className="loading">
						<div>
							<img src={ad} className="" />
						</div>
					</div>
					:
					<div className='singlePost px-0 col-md-8 mt-0 pt-1'>
						<div className='Post row'>
							<div className='col-md-11  mx-0'>
								<div className=' small  mx-0 mb-0'>
									{' '}
									<span className='fa fa-home' /> Home / Bετα / <span className="text-capitalize">{type} </span>News
						</div>
								<div className='news details my-0 py-0'>

									<span className=' mt-0 ml-0 small mb-2'>
										<span className="mr-2">
											Bετα Nεws
								</span>
										<span className='fab fa-twitter mx-1' />
										<span className='fa fa-envelope  ml-2 mr-3' />
										<span className='fa fa-clock' />
										<span className="ml-1 "><Moment calendar>{date}</Moment></span>
									</span>
									<div className='title mt-0 lead text-uppercase mt-1'>{title}</div>
									<div className='text-capitalize description sub font-weight-bold mb-2'>{description}</div>
									<div className='float-right mt-2 text-danger'>
										{views >= 50 && <> <span className='fa fa-eye' />vire views</>}
									</div>
								</div>
							</div>
							<div className='col-12 share-link text-center my-0 sm-hidden'>
								<span className='fab fa-facebook text-primary fa-sm mx-1 p-1 ' />
								<span className='fab fa-twitter text-primary fa-sm  mx-1 p-1' />
								<span className='fab fa-linkedin text-success fa-sm  mx-1 p-1' />
							</div>
							<img src={picture} className=' border text-center mx-auto POST_IMG mb-1' alt='POST_IMG' />
							<div className='content col-12 px-sm-2 px-md-3 py-sm-1 py-md-1 p font-weight-light'>

								{content}
							</div>
							<div className=' col-12  mt-4 mb-0 pb-0'>
								<span className=' w-auto py-0 my-0 '>
									<span className="smaller">Share this:</span>
								</span>
								<div className='social-medias mt-0 border-top border-bottom'>
									<button className='btn btn-md z-depth-0 m-0 blue-grey py-1 px-2 lighten-5 border-default border'>
										<span className=' fab fa-md fa-twitter' /> Twitter
							</button>
									<button className='btn btn-md z-depth-0 mr-0 ml-1 blue-grey py-1 px-2 lighten-5 border-default border'>
										<span className=' fab fa-md fa-facebook' /> Facebook
							</button>
									<button className='btn btn-md z-depth-0 mr-0 ml-1 blue-grey py-1 px-2 lighten-5 border-default border'>
										<span className=' fab fa-md fa-linkedin' /> LinkedIn
							</button>
									<button className='btn btn-md z-depth-0 mr-0 ml-1 blue-grey py-1 px-2 lighten-5 border-default border'>
										<span className=' fab fa-md fa-whatsapp' /> Whatsapp
							</button>
									<button className='btn btn-md z-depth-0 mr-0 ml-1 blue-grey py-1 px-2 lighten-5 border-default border'>
										<span className=' fab fa-md fa-telegram' /> Telegram
							</button>
								</div>
							</div>{' '}
						</div>
						<div className='row shareNewPost border-top px-3 mt-4 py-3 blue-grey lighten-5'>
							<div className='col-12 text-center'>
								<span className='float-left fa fa-share-alt small mt-1'> share</span>
								<span className='text-center'>
									<span className='fab fa-facebook fa-lg ' />
									<span className='fab fa-twitter fa-lg ml-2' />
									<span className='fab fa-linkedin fa-lg ml-2' />
									<span className='fab fa-whatsapp fa-lg ml-2' />
								</span>
							</div>
						</div>
						<div className='row about-betty border mt-4 py-0 mx-0'>
							<div className='col-12 py-4 '>
								<div className='row pl-0'>
									<div className='float-left col-2'>
										<div className='fa fa-user fa-lg border-radius  blue-grey lighten-3 text-white px-2 pt-3' />
									</div>
									<div className='small col-md-10 col-sm-12 my-sm-3'>
										<span className='font-weight-bold'>Beta</span> <br />
										Beta is a columnist, astute marketer and customer relationship professional with over 2
										decades of experience. Her blog aims to motivate women to aspire to greatness
							</div>
								</div>
							</div>
						</div>
						<NewsTwo1c />
						<NewTwo1b />
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
					</div>
				}
			</>



		);
	}
}
export default SinglePost;
