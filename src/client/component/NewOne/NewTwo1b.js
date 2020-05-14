import React, { Component } from 'react';
import './NewTwo.css';
import { stat } from 'fs';
import { fetchPosts, sportPosts, entertainmentPosts, financePosts, sciPosts } from "../../Actions/postActions";
import Moment from 'react-moment'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
const pix = require('../uploads/pixOne.jpg');


class NewTwo1b extends Component {
	constructor() {
		super()
		this.state = {
			p: []
		}
	}
	componentWillMount() {
		this.props.fetchPosts()
		this.props.sportPosts()
		this.props.entertainmentPosts()
		this.props.sciPosts()
		this.props.financePosts()
	}
	componentWillReceiveProps() {
		let source = this.props.finance
		let p = []
		var d
		var b
		var v
		let c
		let e

		while (p.length != source.length) {
			for (e in source) {
				b = Math.floor(Math.random() * (source.length))
				p.push(source[b])
				v = source[b]
				for (c in p) {
					if (c < p.length - 1) {
						if (v == p[c]) {
							console.log(v, c, ' repeat itself')
							p.pop()
						}
					}
				}
			}
		}
		let q = p
		this.setState({
			p: q
		})
	}
	render() {
		return (
			<div className='row  my-4 p-3'>
				<div className='col-12 pl-2 mb-4'>
					<span className='font-weight-bold fa fa-bookmark brubk fa-3x mr-2 ' />
					<span className='ml-2'>Top Stories</span>
				</div>

				<div className='col-12'>

					{this.state.p.map(post => (
						post !== undefined && (


							<div className='row NewTwo1bag border  rounded mb-sm-3'>
								<div
									className='col-md-6 mx-0  NewTwo1bpix'
									style={{
										backgroundImage: `url(${post.picture})`,
										backgroundSize: '100% 100%',
									}}>
									<span class='border rounded-circle px-2 py-1 ml-0 mdb-color lighten-4 strike strike2 fa fa-bolt position-absolute' />

								</div>
								<div className='col-md-6 mx-0 '>
									<div className='font-weight-bold mt-2 mb-2'>
										<Link to={`/post/${post.type + '+' + post._id}`} className="black-text">

											{post.title}
										</Link><span className=' float-right z-depth-0 mx-0 btn-sm px-2 py-1  font-weight-light badge z-depth-0 border white  rounded-pill'>
											<span className="text-danger text-capitalize">  {post.type} News</span>
										</span>
									</div>
									<div className='small'>
										<Link to={`/post/${post.type + '+' + post._id}`} className="black-text" >

											{post.description}
										</Link>
									</div>
									<Link to={`/post/${post.type + '+' + post._id}`} className="mb-sm-3">

										<button className='btn btn-md text-capitalize white text-danger border py-1 px-2 mt-2 ml-0 z-depth-0 small rounded-pill'>
											Read More »
						</button>
									</Link>
									<div className='betatitle small mt-1'>
										<span className='fa fa-newspaper' /> Beta News<span className='fa fa-clock ml-2 mr-1 tsm' />
										<Moment calendar>{post.date}</Moment>
										<span className='float-right'>
											{post.view && <><span className='fa fa-eye tsm' /> {post.views}</>}
										</span>
									</div>
								</div>
							</div>



						)
					))}
					<div className='row NewTwo1bag border rounded'>
						<div
							className='col-md-6 mx-0  NewTwo1bpix'
							style={{
								backgroundImage: `url(${pix})`,
								backgroundSize: '100% 100%',
							}}>
							<span class='border rounded-circle px-2 py-1 ml-0 mdb-color lighten-4 strike strike2 fa fa-bolt position-absolute' />

						</div>
						<div className='col-md-6 mx-0 '>
							<div className='font-weight-bold mt-2 mb-2'>Vicky and Opoku <div className='font-weight-light badge  float-right z-depth-0 border white lighten-4 mx-0 btn-sm px-1 py-1  rounded-pill'>
								<span className="text-danger  float-right">
									Politics News
								</span>
							</div></div>

							<div className='small'>
								Opoku arrived Accra by 10:07 am, precisely 1h:13 minutes after boarding from Lagos. He could
								not take his mind off…
						</div>
							<button className='btn btn-md text-capitalize white text-danger border py-1 px-2 mt-2 ml-0 z-depth-0 small rounded-pill'>
								Read More »
						</button>
							<div className='betatitle small mt-1'>
								<span className='fa fa-newspaper' /> Beta News<span className='fa fa-clock ml-2' />
								{' ' + new Date().toDateString()}{' '}
								<span className='float-right'>
									<span className='fa fa-eye' /> 1233
							</span>
							</div>
						</div>
					</div>
				</div>
			</div >
		);
	}
}
const mapStateToProps = (state) => ({
	finance: [...state.posts.finance.slice(1, 5), ...state.posts.sport.slice(5, state.posts.sport.length), ...state.posts.entertainment.slice(6, 12), ...state.posts.items.slice(6, 9), ...state.posts.sci.slice(0, 4), ...state.posts.foreign.slice(5, 9)]
})
export default connect(mapStateToProps, { fetchPosts, sportPosts, entertainmentPosts, financePosts, sciPosts })(NewTwo1b);
