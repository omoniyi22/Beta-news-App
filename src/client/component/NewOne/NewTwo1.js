import React, { Component } from 'react';
import './NewTwo.css';
import NewTwo1b from './NewTwo1b';
import NewsTwo1c from './newTwo1c';
import { fetchPosts, sportPosts, foreignPosts } from "../../Actions/postActions";
import Moment from 'react-moment'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
const pix = require('../uploads/pixOne.jpg');


class  NewTwo1 extends Component {
constructor(){
	super()
}
	componentDidMount() {
		this.props.fetchPosts()
		this.props.sportPosts()
		this.props.foreignPosts()
	}
	render(){
	return (
		<div className='col-lg-8 py-2 '>
			<div className='row bn-md p-md-3 px-sm-1'>
				<div className='col-md-12 mb-5'>
					<div className='row  p-0'>
						<div className='col-md-12 p-md-0 px-sm-2'>
							<div className=''>
								<span className=''>
								<span className='font-weight-bold fa fa-2x fa-bookmark brubk  fa-3x mr-2 ' />
									<span className='mt-4 pt-2 gid'> Latest News</span>
								</span>
								<span className='float-right small my-1'>
								
									<span className='z-depth-1 btn btn-sm px-2 py-1 mt-0 text-danger mx-2 link mb-
									4
									'>
									<a href='#sporn' data-toggle='tab' className='text-danger'>
									<span className="text-danger small ">  sport</span>
  									</a> </span>
									<span className='z-depth-1 btn btn-sm px-2 py-1 mt-0 text-danger mx-2 link mb-
									4
									'>
									<a href='#politicn' data-toggle='tab' className='text-danger'>
									<span className="text-danger small "> Politics</span>
									</a></span>
									<span className='z-depth-1 btn btn-sm px-2 py-1 mt-0 text-danger mx-2 link mb-
									4
									'>
									<a href='#foreignn' data-toggle='tab' className='text-danger'>
									<span className="text-danger small "> Foreign</span>
									</a>
									</span>
								</span>
							</div>
						</div>
					</div>
					<div className='ero'>
						<span class='border rounded-circle px-2 py-1 ml-0 mdb-color lighten-4 strike fa fa-bolt' />
					</div>
					<div id='myTabContent' className='tab-content row Second1 mt-3'>



						<div className="tab-pane  in active col-12" id="sporn" >
						<div className="row" >
					{this.props.sp.map(post => (
							post !== undefined && (
								
						<div className='col-lg-6 grey  newsTwoIcon pr-3 mx-sm-0' style={{ backgroundImage: `url(${post.picture})` ,  backgroundSize: '100% 150%', backgroundRepeat: 'no-repeat', backgroundOrigin: 'contentBox' }}>
							<Link to={`/post/${post.type + '+' + post._id}`}>
							<div className='news-flex blue'>

								<div className='newstwocontent'>
									<span className=' px-2 py-1 mx-0 font-weight-light btn btn-sm z-depth-0 border white lighten-2'>
										<span className='text-danger small'>{post.type}</span>
									</span>
									<br />
									<div className='mt-2 h4 font-weight-light small capitalize'>{post.title}</div>
									<div className='small font-weight-light tsm '>
										Betty New bvs <Moment calendar>{post.date}</Moment>
									</div>
								</div>
							</div>
								</Link>
						</div>
						)
						))}
						
						<div className='col-lg-6 newsTwoIcon ml-0 '>
						{this.props.sport.map(post => (
							post !== undefined && (
						<Link to={`/post/${post.type + '+' + post._id}`} >
								
								<div className=' news2'>
								<div
									className='newsTwoIconPix'
									style={{
										backgroundImage: `url(${post.picture})`,
										backgroundSize: '100% 100%',
									}}>
									
								</div>
								<div className='newsTwoIconText ml-3 '>
									<div className='betatitle'>
										<span className='fa fa-clock tsm'/>{' '}
										<span className='small bv tsm'><Moment calendar>{post.date}</Moment></span>
									</div>
									<Link to={`/post/${post.type + '+' + post._id}`}>
								<div className='small news2Text black-text'>{post.description}</div>
								</Link>	
								</div>
								</div>
								</Link>
							)
								))}
							</div>
						</div>
						</div>


					<div className="tab-pane fade col-12" id="politicn" >
						<div className="row" >
						{this.props.po.map(post => (
							post !== undefined && (
								
								<div className='col-lg-6 grey  newsTwoIcon pr-3' style={{ backgroundImage: `url(${post.picture})` ,  backgroundSize: '100% 150%', backgroundRepeat: 'no-repeat', backgroundOrigin: 'contentBox' }}>
																<Link to={`/post/${post.type + '+' + post._id}`}>

							<div className='news-flex blue'>
								<div className='newstwocontent'>
									<span className=' px-2 py-1 mx-0 font-weight-light btn btn-sm z-depth-0 border white lighten-2'>
										<span className='text-danger small'>{post.type}</span>
									</span>
									<br />
									<div className='mt-2 h4 font-weight-light small capitalize'>{post.title}</div>
									<div className='small font-weight-light'>
										Betty New 
										<span className="tsm">
										 <Moment calendar>{post.date}</Moment>
										 </span>
									</div>
								</div>
							</div>
							</Link>
						</div>
						)
						))}

						<div className='col-lg-6 newsTwoIcon ml-0 '>
						{this.props.politics.map(post => (
							post !== undefined && (
						<Link to={`/post/${post.type + '+' + post._id}`} >
								
							<div className=' news2'>
								<div
									className='newsTwoIconPix'
									style={{
										backgroundImage: `url(${post.picture})`,
										backgroundSize: '100% 100%',
									}}>
									
								</div>
								<div className='newsTwoIconText ml-3 '>
									<div className='betatitle'>
										<span className='fa fa-clock tsm' />{' '}
										<span className='small bv tsm'><Moment calendar>{post.date}</Moment></span>
									</div>
									<Link to={`/post/${post.type + '+' + post._id}`}>

									<div className='small news2Text black-text'>{post.description}</div>
								</Link>
								</div>
								</div>
								</Link>)
								))}
						</div>
						</div>
					</div>





					<div className="tab-pane fade  col-12" id="foreignn" >
						<div className="row" >
						{this.props.fo.map(post => (
							post !== undefined && (
								
								<div className='col-lg-6 grey  newsTwoIcon pr-3' style={{ backgroundImage: `url(${post.picture})` ,  backgroundSize: '100% 150%', backgroundRepeat: 'no-repeat', backgroundOrigin: 'contentBox' }}>
									<Link to={`/post/${post.type + '+' + post._id}`} >
							<div className='news-flex blue'>
							<Link to={`/post/${post.type + '+' + post._id}`}>

								<div className='newstwocontent'>
									<span className=' px-2 py-1 mx-0 font-weight-light btn btn-sm z-depth-0 border white lighten-2'>
										<span className='text-danger small'>{post.type}</span>
									</span>
									<br />
									<div className='mt-2 h4 font-weight-light small capitalize'>{post.title}</div>
									<div className='small font-weight-light'>
										Betty New 
										<span className="tsm">
										 <Moment calendar>{post.date}</Moment>
										 </span>
									</div>
								</div>
								</Link>
							</div>
						</Link>
						</div>
						)
						))}

						<div className='col-lg-6 newsTwoIcon ml-0 '>
						{this.props.foreign.map(post => (
							post !== undefined && (
						<Link to={`/post/${post.type + '+' + post._id}`} >
								
							<div className=' news2'>
								<div
									className='newsTwoIconPix'
									style={{
										backgroundImage: `url(${post.picture})`,
										backgroundSize: '100% 100%',
									}}>
									
								</div>
								<div className='newsTwoIconText ml-3 '>
									<div className='betatitle'>
										<span className='fa fa-clock tsm' />{' '}
										<span className='small tsm bv bv'><Moment calendar>{post.date}</Moment></span>
									</div>
									<Link to={`/post/${post.type + '+' + post._id}`}>

									<div className='small news2Text black-text'>{post.description}</div>
								</Link>
								</div>
								</div>
								</Link>
								)
								))}
						</div>
						</div>
					</div>






					</div>
				</div>
			</div>
			<NewTwo1b />
			{/* <NewsTwo1c /> */}
		</div>
	);
	
}
}

const mapStateToProps = (state)=>({
	po : [state.posts.items[1]],
	politics: state.posts.items.slice(1,5),
	sp: [state.posts.sport[1]],
	sport:    [state.posts.sport[2], state.posts.sport[3], state.posts.sport[5], state.posts.sport[5]],
	fo: [state.posts.foreign[1]],
	foreign: [state.posts.foreign[2], state.posts.foreign[3], state.posts.foreign[4], state.posts.foreign[5]]

})
export default connect(mapStateToProps, { foreignPosts, sportPosts, fetchPosts })(NewTwo1)
