import React from 'react';

import { connect } from 'react-redux';
import { financePosts, entertainmentPosts } from "../../Actions/postActions";
import Moment from 'react-moment'
import { Link } from 'react-router-dom'
import renderHTML from 'react-render-html'

class NewsOne1 extends React.Component {
	componentDidMount() {
		this.props.financePosts()
		this.props.entertainmentPosts()

	}
	render() {
		return (
			<div className=' float-right col-md-3 px-0 sm-hidden  NewOne NewsOneDivided'>
				{this.props.posts.map(post => (
					post !== undefined && (
						<Link to={`/post/${post.type + '+' + post._id}`} >
							<div style={{ backgroundImage: `url(${post.picture})` }} className='newsIcon border-right pt-1'>
								<div className='badge badge-inverse  py-1 px-1 ml-2 white accent-1 text-capitalize  font-weight-light tsm'><span className="text-danger">News - {post.type}</span></div>
								<br />
								<div className='newsIconNews py-1 px-2 pb-2 '>
									<Link to={`/post/${post.type + '+' + post._id}`} className="text-white">
										<div className=' small newsItems fa-xs'>
											<span className='fa fa-clock' /> <Moment calendar>{post.date}</Moment>

										</div>
										<div className='newsItems  p-0  text-capitalize mb-0 mt-0'>{post.title}</div>
										<div className='newsItemsText gaw p fa-xs'>
											{post.description}
										</div>
									</Link>
								</div>
							</div>
						</Link>
					)
				))}
				{this.props.enter.map(post => (
					post !== undefined && (
						<Link to={`/post/${post.type + '+' + post._id}`} >

							<div style={{ backgroundImage: `url(${post.picture})` }} className='newsIcon border-right pb-0 pt-1'>
								<div className='badge badge-inverse  py-1 px-1 ml-2 white accent-1 text-capitalize  font-weight-light '><span className="text-danger tsm">News - {post.type}</span></div>
								<br />
								<div className='newsIconNews py-1 px-2 pb-2 '>
									<Link to={`/post/${post.type + '+' + post._id}`} className="text-white">

										<div className=' small newsItems fa-xs'>
											<span className='fa fa-clock' /> <Moment calendar>{post.date}</Moment>
										</div>
										<div className='newsItems  p-0 text-capitalize mb-0 mt-0'>{post.title}</div>
										<div className='newsItemsText gaw p fa-xs'>
											{post.description}
										</div>
									</Link>
								</div>
							</div>
						</Link>
					)
				))}
			</div>
		);
	}
}
const mapStatetoProps = state => ({
	posts: [state.posts.finance[0]],
	enter: [state.posts.entertainment[0]]
});
export default connect(mapStatetoProps, { financePosts, entertainmentPosts })(NewsOne1);