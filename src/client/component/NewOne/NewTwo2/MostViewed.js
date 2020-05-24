import React, { Component } from "react";
import { fetchPosts, sportPosts, entertainmentPosts, financePosts, sciPosts } from "../../../Actions/postActions";
import Moment from 'react-moment'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

class MostViewed extends Component {
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
      <div className="MostViewed mx-auto mt-o">
        <div className="w-100 mb-3 px-auto text-center ">
          <span className="MVheader  mx-auto gid font-weight-bold ">
            Most Viewed Headlines
        </span>
        </div>
        <div className="border-bottom pb-3 white z-depth-1">
        </div>
        <div className="white w-100 gbomi z-depth-1-half">
          {this.state.p.map(post => (
            post !== undefined && (
              <Link to={`/post/${post.type + '+' + post._id}`} className="black-text  w-100">


                <div className="MV1 pt-2  pb-3 my-0   px-md-2 px-sm-3 border-bottom ">
                  <div className="mvlink ml-2 ml-md-1 font-weight-light   mt-2  ">
                    <div className="mvtitle">{post.title}</div>
                    <div className="mvdate mt-2">
                      <span className="fa fa-clock fa-md mr-2 tsm" />
                      <span className="tsm ">
                        <Moment calendar>{post.date}</Moment>
                      </span>
                    </div>
                  </div>
                  <div className="picoi ">
                    <div
                      className='News2BTabPix   border mr-2 rounded-lg'
                      style={{
                        backgroundImage: `url(${post.picture})`,
                        backgroundSize: '100% 130%',
                      }}
                    />
                  </div>
                </div>
              </Link>
            )
          ))}
          {/* <div className="MV1 pt-3 mt-2 pb-3 border-bottom">
          <div className="mvlink font-weight-light  ml-2 mr-3 mt-2 ">
            <div className="mvtitle">Women before Yoy Quit Listen to Tomi</div>
            <div className="mvdate">
              <span className="fa fa-clock fa-md mr-2" />
              {new Date().toDateString()}
            </div>
          </div>
          <div className="picoi ">
            <div
              className='News2BTabPix  ml-sm-2 border rounded-lg'
              style={{
                backgroundImage: `url(${'.picture'})`,
                backgroundSize: '100% 100%',
              }}
            />
          </div>
        </div> */}

        </div>
      </div>
    );
  }
}



const mapStateToProps = (state) => ({
  finance: [...state.posts.finance.slice(5, 14), ...state.posts.entertainment.slice(12, 23), ...state.posts.items.slice(9, 19), ...state.posts.sci.slice(4, 15), ...state.posts.foreign.slice(10, state.posts.foreign.length), ...state.posts.sport.slice(10, state.posts.sport.length)]
})
export default connect(mapStateToProps, { fetchPosts, sportPosts, entertainmentPosts, financePosts, sciPosts })(MostViewed);

