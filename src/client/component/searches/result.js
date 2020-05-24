import React, { Component } from 'react';
import { stat } from 'fs';
import { controller } from "../../Actions/postActions";
import Moment from 'react-moment'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
let count = 0
let totalCount = undefined



class Result extends Component {
    constructor() {
        super()
        this.state = {
            p: [],
            disable: false
        }
        // this.control = this.control.bind(this)
    }
    // componentWillMount() {
    //     this.props.fetchPosts()
    //     this.props.sportPosts()
    //     this.props.entertainmentPosts()
    //     this.props.sciPosts()
    //     this.props.financePosts()
    // }
    control(c) {

    }

    render() {
        return (
            <div className='row  px-1 pt-2 '>
                <div className='col-12 pl-2  mb-4 '>
                    <span className='font-weight-bold icofont-bookmark  fa-3x mr-2 ' />
                    <span className='ml-2 gid'>Results</span>
                    <span className='ml-2 gid'>{
                        this.props.search.length > 0 ? this.props.search[1]
                            : "..."}</span>
                </div>


                <div className='col-12 mx-0 px-0'>

                    {this.props.search[0] && this.props.search[0][0].map(post => (
                        post !== undefined && (
                            <Link to={`/post/${post.type + '+' + post._id}`} className="black-text  w-100">


                                <div className="MV1 pt-2  pb-3 my-0  mx-0 px-md-2 px-sm-0 border-bottom " onClick={
                                    () => this.props.fun()
                                }>
                                    <div className="mvlink ml-2 ml-md-1 font-weight-light   mt-2  ">
                                        <div className="mvtitle">{post.title}</div>
                                        <div className="mvdate mt-2">
                                            <span className="fa fa-clock fa-md mr-2 tsm" />
                                            <span className="tsm ">
                                                <Moment calendar>{post.date}</Moment>{post._id}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="picoi ">
                                        <div
                                            className='News2BTabPix   border mr-1 rounded-lg'
                                            style={{
                                                backgroundImage: `url(${post.picture})`,
                                                backgroundSize: '100% 100%',
                                            }}
                                        />
                                    </div>
                                </div>
                            </Link>
                        )
                    ))}

                </div>
                {this.props.search[2] > 0 &&
                    <div className="text-center w-100 border-top px-2">

                        <span className="btn btn-sm mr-2 " onClick={() => {
                            console.log("start")
                            totalCount = this.props.search[2]
                            console.log(totalCount, "found")

                            if (count > 0) {
                                totalCount = this.props.search[2]
                                count -= 1
                                this.props.controller(count)
                                console.log(count, "-n")

                            } else if (count != 0 || count == totalCount) {
                                this.setState({
                                    disable: true
                                })
                            }
                        }}>prev</span>
                        <span className="small mr-1 px-1"> {count + 1} of {Number(this.props.search[2])}</span>
                        <span className="btn btn-sm ml-2 " onClick={() => {
                            let c = 1
                            console.log("start")
                            totalCount = this.props.search[2]
                            console.log(totalCount, "found")

                            if (count < totalCount - 1) {
                                totalCount = this.props.search[2]

                                count += 1
                                console.log(count, "+n")
                                this.props.controller(count)
                            } else if (count == totalCount) {
                                this.setState({
                                    disable: true
                                })
                            }
                        }}>next</span>
                    </div >}
            </div >
        );
    }
}


var mapStatetoProps = state => ({
    search: state.posts.search
});

export default connect(mapStatetoProps, { controller })(Result);
