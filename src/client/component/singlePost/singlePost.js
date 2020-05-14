import React from 'react';
import './singlePost.css';
import axios from 'axios'
import Moment from 'react-moment';
import renderHTML from 'react-render-html'
// importfrom 'react-render-html'

class SinglePost extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			// prop: this.props.prod.replace('+', "/"),
			prop: 'this.props.prod.replace(' + ', "/")',
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
			this.setState({ posts: res.data })
		})
	}
	render() {
		let { title, type, description, content, comments, views, picture, date } = this.state.posts
		return (
			<div className='singlePost col-md-8 mt-0 pt-1 '>
				<div className='Post row '>
					<div className='col-md-11 px-3 '>
						<div className='path small mb-3'>
							{' '}
							<span className='fa fa-home' /> Home / Bετα / <span className="text-capitalize">{type} </span>News
						</div>
						<div className='author badge blue z-depth-0 mt-2'>{''}</div>
						<div className='title mt-0 h2'>{title}</div>
						<div className='description lead mb-3'>{description}</div>
						<div className='news details'>
							<div className='float-left'>
								<span className='fa fa-user fa-lg mr-1 mt-1 text-white blue-grey p-1 pt-2 lighten-3' />
							</div>
							<span className=' float-left mt-2 ml-0 small'>
								Bετα <span className='fab fa-twitter mx-1' />
								<span className='fa fa-envelope  ml-2 mr-3' />
								<span className='fa fa-clock' />
								<span className="ml-1"><Moment calendar>{date}</Moment></span>
							</span>
							<div className='float-right mt-2 text-danger'>
								{views >= 50 && <> <span className='fa fa-eye' /> views</>}
							</div>
						</div>
					</div>
					<div className='col-12 share-link text-center my-2'>
						<span className='fab fa-facebook text-primary fa-sm mx-1 p-1 ' />
						<span className='fab fa-twitter text-danger fa-sm  mx-1 p-1' />
						<span className='fab fa-linkedin text-success fa-sm  mx-1 p-1' />
					</div>
					<img src={picture} className=' border text-center mx-auto POST_IMG' alt='POST_IMG' />
					<div className='content col-12 px-sm-2 px-md-3 py-sm-4 py-md-5'>
						stViewed.js
	  Line 24:   'd' is defined but never used           no-unused-vars
	  Line 28:   'e' is assigned a value but never used  no-unused-vars
	  Line 30:  Expected '!==' and instead saw '!='     eqeqeq
	  Line 37:  Expected '===' and instead saw '=='     eqeqeq

	./src/client/ClientAPIs.js
	  Line 2:   'fetchPosts' is defined but never used      no-unused-vars
	  Line 3:   'FETCH_MESSAGES' is defined but never used  no-unused-vars
	  Line 30:  Unreachable code                            no-unreachable


																																	 no-unused-vars
	  Line 55:  The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid
	  Line 61:  'MSignOut' is assigned a value but never used
																																	 no-unused-vars

	./src/client/component/NewOne/NewTwo2/News2C.js
	  Line 6:  Useless constructor  no-useless-constructor

	./src/client/component/Sign/Sign.js
	  Line 6:  'Advert' is defined but never used  no-unused-vars

	./src/client/component/NewOne/newsOne2.js
	  Line 6:  'renderHTML' is defined but never used  no-unused-vars

	./src/client/component/NewOne/NewsOne3.js
	  Line 6:  'renderHTML' is defined but never used  no-unused-vars

	./src/client/component/Admin/Post/Posts.js
	  Line 7:   'deleted' is defined but never used        no-unused-vars
	  Line 8:   'stat' is defined but never used           no-unused-vars
	  Line 34:  'pixs' is assigned a value but never used  no-unused-vars

	./src/client/component/NewOne/newsOne1.js
	  Line 7:  'renderHTML' is defined but never used  no-unused-vars

	./src/client/component/NewOne/NewTwo2/News2B.js
	  Line 8:   'pixs' is assigned a value but never used  no-unused-vars
	  Line 11:  Useless constructor                        no-useless-constructor

	./src/client/component/Advert/Advert.js
	  Line 90:   img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text
	  Line 94:   img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text
	  Line 104:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text
	  Line 113:  img elements must have an alt prop, either with meaningful text, or an empty string for d
						jhjhdfklhdfhklsh
					{content}</div>
					<div className='share col-12  mt-4'>
						<span className=' w-auto py-3'>Share this:</span>
						<div className='social-medias mt-2'>
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
export default SinglePost;
