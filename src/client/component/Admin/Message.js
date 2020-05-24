import React, { Component } from 'react'
import { openMessage, fetchMessages } from "../../Actions/postActions";
import { deleteMessage } from "../../ClientAPIs"
import MessageModal from './messageModal'
import Moment from 'react-moment'
import { connect } from 'react-redux';



class Message extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showmodal: false,
            first_name: '',
            last_name: '',
            email: '',
            subject: '',
            message: ''
        }
        this.Closemodal = this.Closemodal.bind(this)
    }

    componentWillMount() {
        this.props.fetchMessages()
    }
    componentWillUpdate() {
        this.props.fetchMessages()
    }
    Closemodal() {
        this.setState((prev) => {
            return { showmodal: !prev.showmodal }
        })
    }

    render() {
        return (
            <>
                <section id="pricing" class="container-fluid pricing section-bg " style={{ paddingRight: !this.state.showmodal && 0, paddingLeft: this.state.showmodal ? '0px' : '0', display: this.state.showmodal ? 'block' : 'block' }}>
                    <div class="" style={{ paddingRight: !this.state.showmodal && '0px' }}>
                        <button type='i' onClick={this.props.cancel} className=' mt-0 mb-4 btn-sm btn mr-0 ml-5  px-3 radius px-0 btn-white'>
                            <span className="fa fa-arrow-circle-left" /> Back
                </button>
                        <div class="section-title" data-aos="fade-up">
                            <h2>MESSAGES</h2>
                        </div>
                        <div class="row px-4">
                            {this.state.showmodal && <MessageModal belli={this.state.showmodal} message={this.props.message} closemoda={this.Closemodal} time={<Moment fromNow> {this.props.message.dot} </Moment>} />}
                            {this.props.messages.map(message => (
                                <div class="col-lg-4 col-md-4 col-sm-6 mt-4 bol mb-3 ded" data-aos="zoom-in" data-aos-delay="100" style={{ marginRight: this.state.showmodal ? 'auto' : 'auto', marginLeft: this.state.showmodal ? 'auto' : 'auto', display: this.state.showmodal ? 'block' : 'block' }}>
                                    <div className="fixe white px-1 z-depth-1 " >From: {message.first_name + " " + message.last_name}</div>
                                    <div class="box  ded px-0">
                                        <span class="advanced white text-primary z-depth-1">Beta News</span>
                                        <div class=' biz  px-2 py-1 '><Moment fromNow>{message.date}</Moment></div>
                                        <div className="border-top border-bottom pt-5 z-depth-1">
                                            <h4>{message.read ? <sup className="fa fa-envelope-open-text"></sup> : <sup className="fa fa-envelope"></sup>}</h4>
                                        </div>
                                        <div class="btn-wrap fofo">
                                            <a class="trach btn-primary white text-default btn" data-toggle="modal" data-target="#myModal" onClick={() => {
                                                this.props.openMessage(message)
                                                this.setState({
                                                    showmodal: true,
                                                })
                                                console.log(this.props.message)
                                            }}><span class="far fa-eye text-white fa-1x ">  </span><span class="text-white"> open</span></a>
                                            <a href="#" class="trach btn btn-danger white text-red" onClick={() => {
                                                deleteMessage(message._id)
                                            }}><span class="far fa-trash-alt text-white fa-1x ">  </span><span class="text-white"> delete</span></a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section >
            </>
        )
    }
}

const mapStateToProps = state => ({
    message: state.posts.message,
    messages: state.posts.messages
})
export default connect(mapStateToProps, { fetchMessages, openMessage })(Message)