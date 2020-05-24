import React, { Component } from 'react';
import './News2.css';
import { fetchPosts, sportPosts, entertainmentPosts } from "../../../Actions/postActions";
import Moment from 'react-moment'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

const pixs = require('../../uploads/pixOne.jpg');

class News2B extends Component {
	constructor() {
		super()
	}
	componentDidMount() {
		this.props.fetchPosts()
		this.props.sportPosts()
		this.props.entertainmentPosts()
	}
	render() {
		return (
			<div className='News2tab'>
				<ul id='myTab' className='nav nav-tabs white row mb-4'>
					<li className=' col-4 px-0  py-3 border-right border-bottom'>
						<a href='#enter' data-toggle='tab' className='text-danger text-uppercase small'>
							Entertainment
						</a>
					</li>
					<li className='col-4  py-3 border-bottom border-right'>
						<a href='#sports' data-toggle='tab' className='text-uppercase small text-danger'>
							Sport
					</a>
					</li>
					<li className='active col-4 text-center  py-3 border-bottom'>
						<a href='#bus' data-toggle='tab' className='text-uppercase small text-danger'>
							Business
					</a>
					</li>
				</ul>

				<div id='myTabContent' className='tab-content pb-3  row codd cdds  px-2 z-depth-1'>
					<div className='tab-pane  in active w-100' id='enter'>
						{this.props.entertainment.map(post => (
							post !== undefined && (
								<Link to={`/post/${post.type + '+' + post._id}`}  >

									<div className='News2BTabRecent mt-0  py-2   border-bottom w-100'>
										<div
											className='News2BTabPix mr-3 border rounded-lg'
											style={{
												backgroundImage: `url(${post.picture})`,
												backgroundSize: '100% 120%',
											}}
										/>
										<Link to={`/post/${post.type + '+' + post._id}`}>
											<div className='News2BTabTitle text-left pt-1 '>
												<div className='News2BTabTopic  news2Text black-text'>{post.title}</div>
												<div className='News2BTabDate small mt-1 font-weight-light'>
													<span className='fa fa-calendar-day mr-1 tsm' />
													<span className="tsm">
														<Moment calendar>{post.date}</Moment>
													</span>
												</div>
											</div>
										</Link>
									</div>
								</Link>
							)
						))}
					</div>
					<div className='tab-pane fade' id='sports'>
						{this.props.sport.map(post => (
							post !== undefined && (
								<Link to={`/post/${post.type + '+' + post._id}`} >

									<div className='News2BTabRecent mt-0 py-2'>
										<div
											className='News2BTabPix border rounded-lg mr-3'
											style={{
												backgroundImage: `url(${post.picture})`,
												backgroundSize: '100% 120%',
											}}
										/>
										<Link to={`/post/${post.type + '+' + post._id}`}>
											<div className='News2BTabTitle text-left pt-1 '>
												<div className='News2BTabTopic  news2Text black-text'>{post.title}</div>
												<div className='News2BTabDate small mt-1 font-weight-light'>
													<span className='fa fa-calendar-day mr-1 tsm' />
													<span className="tsm">
														<Moment calendar>{post.date}</Moment>
													</span>
												</div>
											</div>
										</Link>
									</div>
								</Link>
							)
						))}
					</div>


					<div className='tab-pane fade' id='bus'>
						{this.props.politics.map(post => (
							post !== undefined && (
								<Link to={`/post/${post.type + '+' + post._id}`} >

									<div className='News2BTabRecent mt-0 py-2'>
										<div
											y className='News2BTabPix mr-3 border rounded-lg'
											style={{
												backgroundImage: `url(${post.picture})`,
												backgroundSize: '100% 120%',
											}}
										/>
										<Link to={`/post/${post.type + '+' + post._id}`}>
											<div className='News2BTabTitle text-left pt-1 '>
												<div className='News2BTabTopic  news2Text black-text'>{post.title}</div>
												<div className='News2BTabDate small mt-1 font-weight-light'>
													<span className='fa fa-calendar-day mr-1 tsm' />
													<span className='tsm'>
														<Moment calendar>{post.date}</Moment>
													</span>
												</div>
											</div>
										</Link>
									</div>
								</Link>
							)
						))}
					</div>
				</div>
			</div>
		);
	}
}
const mapStateToProps = (state) => ({
	politics: [state.posts.finance[1], state.posts.finance[2], state.posts.finance[3], state.posts.finance[4], state.posts.finance[5], state.posts.finance[6], state.posts.finance[7], state.posts.finance[8], state.posts.finance[9]],
	entertainment: [state.posts.entertainment[1], state.posts.entertainment[2], state.posts.entertainment[3], state.posts.entertainment[4], state.posts.entertainment[5], state.posts.entertainment[6], state.posts.entertainment[7], state.posts.entertainment[8], state.posts.entertainment[9]],
	sport: [state.posts.sport[10], state.posts.sport[11], state.posts.sport[12], state.posts.sport[13], state.posts.sport[14], state.posts.sport[15], state.posts.sport[16], state.posts.sport[17], state.posts.sport[18]]
})
export default connect(mapStateToProps, { fetchPosts, sportPosts, entertainmentPosts })(News2B)
