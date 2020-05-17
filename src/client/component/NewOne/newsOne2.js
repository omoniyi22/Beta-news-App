import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from "../../Actions/postActions";
import Moment from 'react-moment'
import { Link } from 'react-router-dom'
import renderHTML from 'react-render-html'


class NewOne2 extends Component {
	componentWillMount() {
		this.props.fetchPosts()
	}
	render() {
		return (
			this.props.posts.map(post => (
				post !== undefined && (

					<div style={{ backgroundImage: `url(${post.picture})`, backgroundSize: '100% 150%', backgroundRepeat: 'no-repeat', backgroundOrigin: 'contentBox' }} className='col-md-6 px-0 pt-0 newsOne2 bn-md '>
						<Link to={`/post/${post.type + '+' + post._id}`} >
							<div className='badge z-depth-0 py-1 mt-0 mx-1 mb-2 red accent-1 font-weight-light text-capitalize tsm'>News - {post.type}</div>
							<br />

							<div className='newsIconNews py-1 px-0 px-2 pb-2'>
								<Link to={`/post/${post.type + '+' + post._id}`} className="text-white">
									<div className=' small newsItems fa-xs text-capitalize'>
										<span className='fa fa-clock tsm' />
										<span className="tsm ml-1">
											<Moment calendar>{post.date}</Moment>
										</span>
									</div>
									<div className='newsItems  p-0  mb-2 mt-1 text-capitalize'>News - {post.title}</div>
									<div className='newsItemsText p fa-xs'>
										{post.description}
									</div>
								</Link>
							</div>
						</Link>
					</div >
				)
			))
		);
	}
}
const mapStatetoProps = state => ({
	posts: [state.posts.items[0]]
});
export default connect(mapStatetoProps, { fetchPosts })(NewOne2);
