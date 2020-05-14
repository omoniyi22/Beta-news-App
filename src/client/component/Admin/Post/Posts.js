import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import Moment from 'react-moment'
import { deletePost, fetchPosts, sciPosts, foreignPosts, entertainmentPosts, sportPosts, financePosts, editPost } from "../../../Actions/postActions";
import Update from './Update'
import { deleted } from './../../../ClientAPIs'
import { stat } from 'fs';


class Posts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            delete: "",
            update: true
        };
    }
    componentWillMount() {
        this.props.fetchPosts()
        this.props.entertainmentPosts()
        this.props.sciPosts()
        this.props.financePosts()
        this.props.sportPosts()
        this.props.foreignPosts()
    }
    // componentWillReceiveProps(Nextprops) {
    //     if (Nextprops.newPosts) {
    //         this.props.posts.pop()
    //     }
    // }

    render() {
        let pixs = 'klkl'
        return (
            this.state.update ? (<div className="col-md-7 col-sm-12 mx-auto mt-4 mx-3">
                <button type='i' onClick={this.props.cancel} className=' mt-0 mb-4 btn-sm btn mr-0  px-3 radius px-0'>
                    <span className="fa fa-arrow-circle-left" /> Back
                </button>
                <div className='News2tab'>
                    <ul id='myTab' className='nav nav-tabs white row mb-4 border-bottom'>
                        <li className='active col-4 text-center  py-3 border-left border-right border-bottom border-top'>
                            <a href='#politics' data-toggle='tab' className='text-danger'>
                                Politics
			                </a>
                        </li>
                        <li className='col-4  py-3 border-bottom border-top'>
                            <a href='#economy' data-toggle='tab' className='text-danger'>
                                Economy
					        </a>
                        </li>
                        <li className='col-4  py-3 border-bottom border-left border-right border-top'>
                            <a href='#entertainment' data-toggle='tab' className='text-danger'>
                                Entertainment
					        </a>
                        </li>
                        <li className='col-4  py-3 border-right border-left border-top'>
                            <a href='#science' data-toggle='tab' className='text-danger'>
                                Science & Tech
					        </a>
                        </li>
                        <li className='col-4  py-3 border-top'>
                            <a href='#sport' data-toggle='tab' className='text-danger'>
                                Sport
					        </a>
                        </li>

                        <li className='col-4  py-3 border-left border-right border-top'>
                            <a href='#foreign' id='myTabDrop1' className=' text-danger' data-toggle='tab'>
                                Foreign
                            </a>
                        </li>
                    </ul>
                    <div id='myTabContent' className='tab-content pb-3'>
                        <div className='tab-pane in active' id='politics'>
                            {this.props.posts !== undefined && this.props.posts.map(post =>
                                post !== undefined && (
                                    <div key={post.id} className='News2BTabRecet mt-3 float-left w-100 '>
                                        <div
                                            className='News2BTabPix mr-3 border float-left'
                                            style={{
                                                backgroundImage: `url(${post.picture})`,
                                                backgroundSize: '100% 100%',
                                            }}
                                        />
                                        <div className='News2BTabTitle text-left pt-1 float-left'>
                                            <div className='News2BTabTopic small news2Text'>{post.title}</div>
                                            <div className='News2BTabDate small mt-1 font-weight-light'>
                                                <span className='fa fa-clock    mr-1' /><Moment fromNow>{post.date}</Moment>
                                            </div>
                                        </div>
                                        <div onClick={() => {
                                            let a = [post.type, post._id]
                                            deletePost(a)
                                        }} id={post._id} className='News2BTabTitle text-left pt-1 float-right mx-md-3  ml-0 fa text-danger font-weight-bold fa-trash-alt' />
                                        <div onClick={() => {
                                            this.props.editPost(post);
                                            this.setState({ update: false })
                                        }} id={post} className='News2BTabTitle text-left pt-1 float-right mr-4 text-primary font-weight-bold fa fa-edit'></div>
                                    </div>
                                ))}
                        </div>

                        <div className='tab-pane fade' id='economy'>
                            {this.props.finance !== undefined && this.props.finance.map(post =>
                                post !== undefined && (
                                    <div key={post.id} className='News2BTabRecet mt-3 float-left w-100 '>
                                        <div
                                            className='News2BTabPix mr-3 border float-left'
                                            style={{
                                                backgroundImage: `url(${post.picture})`,
                                                backgroundSize: '100% 100%',
                                            }}
                                        />
                                        <div className='News2BTabTitle text-left pt-1 float-left'>
                                            <div className='News2BTabTopic small news2Text'>{post.title}</div>
                                            <div className='News2BTabDate small mt-1 font-weight-light'>
                                                <span className='fa fa-clock    mr-1' /><Moment fromNow>{post.date}</Moment>
                                            </div>
                                        </div>
                                        <div onClick={() => {
                                            let a = [post.type, post._id]
                                            deletePost(a)
                                        }} id={post._id} className='News2BTabTitle text-left pt-1 float-right mx-md-3  ml-0 fa text-danger font-weight-bold fa-trash-alt' />
                                        <div onClick={() => {
                                            this.props.editPost(post);
                                            this.setState({ update: false })
                                        }} id={post} className='News2BTabTitle text-left pt-1 float-right mr-4 text-primary font-weight-bold fa fa-edit'></div>
                                    </div>
                                ))}
                        </div>
                        <div className='tab-pane fade' id='entertainment'>
                            {this.props.entertainment !== undefined && this.props.entertainment.map(post =>
                                post !== undefined && (
                                    <div key={post.id} className='News2BTabRecet mt-3 float-left w-100 '>
                                        <div
                                            className='News2BTabPix mr-3 border float-left'
                                            style={{
                                                backgroundImage: `url(${post.picture})`,
                                                backgroundSize: '100% 100%',
                                            }}
                                        />
                                        <div className='News2BTabTitle text-left pt-1 float-left'>
                                            <div className='News2BTabTopic small news2Text'>{post.title}</div>
                                            <div className='News2BTabDate small mt-1 font-weight-light'>
                                                <span className='fa fa-clock    mr-1' /><Moment fromNow>{post.date}</Moment>
                                            </div>
                                        </div>
                                        <div onClick={() => {
                                            let a = [post.type, post._id]
                                            deletePost(a)
                                        }} id={post._id} className='News2BTabTitle text-left pt-1 float-right mx-md-3  ml-0 fa text-danger font-weight-bold fa-trash-alt' />
                                        <div onClick={() => {
                                            this.props.editPost(post);
                                            this.setState({ update: false })
                                        }} id={post} className='News2BTabTitle text-left pt-1 float-right mr-4 text-primary font-weight-bold fa fa-edit'></div>
                                    </div>
                                ))}
                        </div>
                        <div className='tab-pane fade' id='science'>
                            {this.props.sci !== undefined && this.props.sci.map(post =>
                                post !== undefined && (
                                    <div key={post.id} className='News2BTabRecet mt-3 float-left w-100 '>
                                        <div
                                            className='News2BTabPix mr-3 border float-left'
                                            style={{
                                                backgroundImage: `url(${post.picture})`,
                                                backgroundSize: '100% 100%',
                                            }}
                                        />
                                        <div className='News2BTabTitle text-left pt-1 float-left'>
                                            <div className='News2BTabTopic small news2Text'>{post.title}</div>
                                            <div className='News2BTabDate small mt-1 font-weight-light'>
                                                <span className='fa fa-clock    mr-1' /><Moment fromNow>{post.date}</Moment>
                                            </div>
                                        </div>
                                        <div onClick={() => {
                                            let a = [post.type, post._id]
                                            deletePost(a)
                                        }} id={post._id} className='News2BTabTitle text-left pt-1 float-right mx-md-3  ml-0 fa text-danger font-weight-bold fa-trash-alt' />
                                        <div onClick={() => {
                                            this.props.editPost(post);
                                            this.setState({ update: false })
                                        }} id={post} className='News2BTabTitle text-left pt-1 float-right mr-4 text-primary font-weight-bold fa fa-edit'></div>
                                    </div>
                                ))}
                        </div>
                        <div className='tab-pane fade' id='sport'>
                            {this.props.sport !== undefined && this.props.sport.map(post =>
                                post !== undefined && (
                                    <div key={post.id} className='News2BTabRecet mt-3 float-left w-100 '>
                                        <div
                                            className='News2BTabPix mr-3 border float-left'
                                            style={{
                                                backgroundImage: `url(${post.picture})`,
                                                backgroundSize: '100% 100%',
                                            }}
                                        />
                                        <div className='News2BTabTitle text-left pt-1 float-left'>
                                            <div className='News2BTabTopic small news2Text'>{post.title}</div>
                                            <div className='News2BTabDate small mt-1 font-weight-light'>
                                                <span className='fa fa-clock    mr-1' /><Moment fromNow>{post.date}</Moment>
                                            </div>
                                        </div>
                                        <div onClick={() => {
                                            let a = [post.type, post._id]
                                            deletePost(a)
                                        }} id={post._id} className='News2BTabTitle text-left pt-1 float-right mx-md-3  ml-0 fa text-danger font-weight-bold fa-trash-alt' />
                                        <div onClick={() => {
                                            this.props.editPost(post);
                                            this.setState({ update: false })
                                        }} id={post} className='News2BTabTitle text-left pt-1 float-right mr-4 text-primary font-weight-bold fa fa-edit'></div>
                                    </div>
                                ))}
                        </div>
                        <div className='tab-pane fade' id='foreign'>
                            {this.props.foreign !== undefined && this.props.foreign.map(post =>
                                post !== undefined && (
                                    <div key={post.id} className='News2BTabRecet mt-3 float-left w-100 '>
                                        <div
                                            className='News2BTabPix mr-3 border float-left'
                                            style={{
                                                backgroundImage: `url(${post.picture})`,
                                                backgroundSize: '100% 100%',
                                            }}
                                        />
                                        <div className='News2BTabTitle text-left pt-1 float-left'>
                                            <div className='News2BTabTopic small news2Text'>{post.title}</div>
                                            <div className='News2BTabDate small mt-1 font-weight-light'>
                                                <span className='fa fa-clock    mr-1' /><Moment fromNow>{post.date}</Moment>
                                            </div>
                                        </div>
                                        <div onClick={() => {
                                            let a = [post.type, post._id]
                                            deletePost(a)
                                        }} id={post._id} className='News2BTabTitle text-left pt-1 float-right mx-md-3  ml-0 fa text-danger font-weight-bold fa-trash-alt' />
                                        <div onClick={() => {
                                            this.props.editPost(post);
                                            this.setState({ update: false })
                                        }} id={post} className='News2BTabTitle text-left pt-1 float-right mr-4 text-primary font-weight-bold fa fa-edit'></div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>) : < Update cancel={() => {
                this.setState({ update: true })
            }} />
        )
    }
}

// Posts.propTypes = {
//     fetchPosts: propTypes.func.isRequired,
//     posts: propTypes.array.isRequired,
//     newPosts: propTypes.object
// }

var mapStatetoProps = state => ({
    entertainment: state.posts.entertainment,
    posts: state.posts.items,
    sci: state.posts.sci,
    foreign: state.posts.foreign,
    finance: state.posts.finance,
    sport: state.posts.sport
});

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        editPost: editPost,
        // cancel: () => { this.setState({ update: true }) }

    }, dispatch)
}
export default connect(mapStatetoProps, { entertainmentPosts, fetchPosts, editPost, sciPosts, financePosts, foreignPosts, sportPosts, matchDispatchToProps })(Posts);