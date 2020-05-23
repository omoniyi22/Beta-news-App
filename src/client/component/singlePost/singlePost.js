import React from 'react';
import './singlePost.css';
import axios from 'axios'
import Moment from 'react-moment';
import NewsTwo1c from './../NewOne/newTwo1c'
import { Comment, singlePost } from './../../Actions/postActions'
import NewTwo1b from './../NewOne/NewTwo1b'
import NewsTwo2 from './../../component/NewOne/NewTwo2'
import { connect } from 'react-redux';
import renderHTML from 'react-render-html'
const ad = require('./imag.gif');
// importfrom 'react-render-html'

function top() {
	window.pageYOffset = 0
	document.body.scrollTop = 0
	document.documentElement.scrollTop = 0
}




class Row2 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			prod: this.props.match.params.id,
			loading: false,
			posts: [],
			error: '',
			check: false,
			comment: new String(),
			name: '',
			msg: ''
		};
		this.check = this.check.bind(this)
		this.changed = this.changed.bind(this)
		this.submit = this.submit.bind(this)

	}
	componentDidMount() {
		this.props.singlePost(`/news/${this.props.match.params.id.replace('+', "/")}`)
		top();
		if (this.props.sp[0]) {
			console.log(this.props.sp[0])

		}

	}
	componentWillReceiveProps(nextP) {
		if (this.props.sp[0]) {
			if (nextP.comment) {
				this.props.sp[0].comments.push(nextP.comment)
				console.log(this.props.sp[0])
			}
		} else { return null }

	}
	check() {
		this.setState((prev) => {
			return {
				check: !prev.check,
				name: ''
			}
		})
	}
	changed(e) {
		this.setState({
			[e.target.name]: [e.target.value]
		})
	}
	submit(w) {
		w.preventDefault()
		if (`${this.state.comment}`.length > 1) {
			let { posts, comment, name } = this.state
			let men = [posts[0].type, posts[0]._id, `${name}`, `${comment}`]
			Comment(men)
			console.log(men, `/news/${men[0]}/comment/${men[1]}`)
		} else {
			this.setState({
				msg: "Comment box is empty"
			})
			console.log("neva use comment", `${this.state.comment}`.length, `${this.state.comment}`)
		}
	}
	render() {
		if (this.state.prod != this.props.match.params.id) {
			this.setState({
				loading: false
			})
			this.props.singlePost(`/news/${this.props.match.params.id.replace('+', "/")}`)
			top()
			if (this.props.sp[0]) {
				this.setState({
					loading: true,
					prod: this.props.match.params.id
				})
			}
		}
		// if (this.props.match.params.id !=)
		return (
			<>
				{!this.props.sp ?
					<div className="loading">
						<div>
							<img src={ad} className="" />
						</div>
					</div>
					:
					(this.props.sp.map(post => (
						post !== undefined && (
							<div className='container-fliud my-sm-0'>
								<div className='row my-sm-0'>
									<div className='singlePost  col-md-8 px-3 mx-0 mt-0 pt-1 '>
										<div className='Post row rolle white z-depth-1 py-md-3'>
											<div className='col-md-11  mx-0'>
												<div className=' small  mx-0 mb-0 gia'>
													{' '}
													<span className='fa gia fa-home gia' /> Home / Bετα / <span className="text-capitalize gia">{post.type + this.state.prod} </span>News
						</div>
												<div className='news details px-0 my-0 py-0 '>

													<span className=' mt-0 ml-0 small mb-2 gia'>
														<span className="mr-2 font-weight-light">
															Bετα Nεws
								</span>
														<span className='fab fa-twitter mx-1' />
														<span className='fa fa-envelope  ml-2 mr-3' />
														<span className='fa fa-clock tsm' />
														<span className="ml-1 small "><Moment calendar>{post.date}</Moment></span>
													</span>
													<div className='title gia font-weight-light text-uppercase my-1 '>{post.title}</div>
													<div className='text-capitalize ssk  small  mb-2 mt-2'>{post.description}</div>
													<div className='float-right mt-2 text-danger'>
														{post.views >= 50 && <> <span className='fa fa-eye' />post.views</>}
													</div>
												</div>
											</div>
											<div className='col-12 share-link text-center my-0 sm-hidden'>
												<span className='fab fa-facebook text-primary fa-sm mx-1 p-1 ' />
												<span className='fab fa-twitter text-primary fa-sm  mx-1 p-1' />
												<span className='fab fa-linkedin text-success fa-sm  mx-1 p-1' />
											</div>
											<div style={{
												backgroundImage: `url(${post.picture})`,
												backgroundSize: '100% 117%',
											}} className=' border text-center mx-auto POST_IMG w-100 mb-sm-3 mb-md-4 ' alt='POST_IMG' />									<div className='content ssk col-12 px-sm-2 px-md-3 mt-sm-3 mt-md-3 py-md-1 '>
												{renderHTML(post.content)}
											</div>
											<div className=' col-12  mt-4 mb-0 pb-0'>
												<span className=' w-auto py-0 my-0 '>
													<span className="smaller">Share this:</span>
												</span>
												<div className='social-medias mt-0 border-top border-bottom'>
													<button className='btn btn-md z-depth-0 m-0 blue-grey py-0 px-1 px-md-2 lighten-5 border-default border small'>
														<span className=' fab fa-md fa-twitter small pr-1' />
														<span className="small">

															Twitter
												</span>
													</button>
													<button className='btn btn-md z-depth-0 mr-0 ml-1 blue-grey py-0 px-1 px-md-2 lighten-5 border-default border small'>
														<span className=' fab fa-md fa-facebook pr-1 ' />
														<span className="small">
															Facebook
												 </span>
													</button>
													<button className='btn btn-md z-depth-0 mr-0 ml-1 blue-grey py-0 px-1 px-md-2 lighten-5 border-default border small'>
														<span className=' fab fa-md fa-linkedin pr-1' />
														<span className="small">
															LinkedIn
												 </span>
													</button>
													<button className='btn btn-md z-depth-0 mr-0 ml-1 blue-grey py-0 px-1 px-md-2 lighten-5 border-default border small'>
														<span className=' fab fa-md fa-whatsapp pr-1' />
														<span className="small">

															Whatsapp
												</span>
													</button>
													<button className='btn btn-md z-depth-0 mr-0 ml-1 blue-grey py-0 px-1 px-md-2 lighten-5 border-default border small'>
														<span className=' fab fa-md fa-telegram pr-1' />
														<span className="small">
															Telegram
												</span>
													</button>
												</div>
											</div>{' '}
										</div>
										<div className='row shareNewPost border-top  mt-4 py-3 blue-grey lighten-5'>
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
										<div className='row about-betty border mt-4 py-0 mx-0 white'>
											<div className='col-12 py-2 '>
												<div className='row pl-0'>
													<div className='float-left col-2'>
														<div className='fa fa-user fa-lg border-radius  blue-grey lighten-3 text-white px-1 pt-2' />
													</div>
													<div className='small col-md-10 col-sm-12 my-sm-3'>
														<span className='font-weight-bold'>Beta</span> <br />
														<span className="small">
															Beta is a columnist, astute marketer and customer relationship professional with over 2
															decades of experience. Her blog aims to motivate women to aspire to greatness
												</span>
													</div>
												</div>
											</div>
										</div>
										<div className='step-content  mr-xl-0 p-2 mt-2 container-fluid z-depth-1 white '>
											COMMENT BOX
										</div>
										<div className='step-content  mr-xl-0 p-2 mt-2 container-fluid z-depth-1 white '>
											<div className="row  w-100 px-0 mx-auto">
												{post.comments && post.comments.map(pos => <NewsTwo1c user={pos.user} comment={pos.value} date={pos.date} />)}

											</div>
										</div>
										<form class="form-horizontal mx-0 row ssk mt-3 z-depth-1 white" noValidate onSubmit={(e) => {
											e.preventDefault()
											if (`${this.state.comment}`.length > 1) {
												let { comment, name } = this.state
												let { sp } = this.props
												let men = [sp[0].type, sp[0]._id, `${name}`, `${comment}`]
												this.props.Comment(men)
												console.log(men, `/news/${men[0]}/comment/${men[1]}`)
												this.setState({
													comment: '',
													name: ''
												})
											} else {
												this.setState({
													msg: "Comment box is empty"
												})
												console.log("neva use comment", `${this.state.comment}`.length, `${this.state.comment}`)
											}
										}}>
											<div class="card-body container-fluid">
												<div class="form-group row">
													<div class="offset-sm-2 col-sm-10">
														<div class="form-check">
															<input type="checkbox" class="form-check-input" id="exampleCheck2" onClick={this.check} />
															<label class="form-check-label" for="exampleCheck2">Remain Anonymous</label>
														</div>
													</div>
												</div>
												<div class="form-group row">
													<label for="inputEmail3" class="col-sm-2 col-form-label">Name</label>
													<div class="col-sm-10">
														<input type="email" class="form-control ssk" onChange={this.changed} value={this.state.name} name="name" disabled={this.state.check && "disabled"} id="inputEmail3" placeholder="Name" />
													</div>
												</div>
												<div class="form-group row">
													<label for="inputPassword3" class="col-sm-2 col-form-label">Comment</label>
													<div class="col-sm-10">
														<textarea type="password" class="form-control ssk" name='comment' value={this.state.comment} onChange={this.changed} id="inputPassword3" placeholder="..comment here" />
													</div>
												</div>

											</div>
											<span className="w-100 text-right pb-3">
												<button type="submit" class="btn blue text-white lighten-2 float-right btn-sm px-2 mt-0 mr-3 rounded-lg">SEND <span className="ml-1 fa fa-paper-plane" /></button>
											</span>
										</form>
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
									<NewsTwo2 />
								</div>
								<div className='row'>

								</div>
							</div>))))
				}
			</>



		);
	}
}
const mapStateToProps = state => ({
	comment: state.posts.comment,
	sp: state.posts.sp
});
export default connect(mapStateToProps, { Comment, singlePost })(Row2);
