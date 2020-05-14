import React, { Component } from 'react'
import Moment from 'react-moment'
import { openMessage, fetchMessages } from "../../Actions/postActions";
import { deleteMessage } from "../../ClientAPIs"

import { connect } from 'react-redux';


class MessageModal extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.fetchMessages()
    }
    componentWillUpdate() {
        this.props.fetchMessages()
    }
    render() {
        return (
            <div className="messageModal w-100" onClick={() => this.props.closemoda()}>
                <div className="mmoadal border-bottom white my-sm-3 my-md-5 mx-lg-auto mx-md-auto mx-sm-auto modal-right" data-aos="fade-right" onClick={() => this.props.closemoda()}>
                    <div className=" z-depth-1  px-3 pb-5 pt-3 blue text-white">
                        <div className="lead font-weight-light float-left">Beta News</div>
                        <div className="small font-weight-light float-right mt-1">{this.props.message.email}</div>
                    </div>
                    <div className="border-bottom readMessage  pr-3 pl-1 py-4">
                        <div className="readMessagePix w-25 mt-4 ">
                            <div className="readMessagePi w-100 white x-depth-1 mx-auto z-depth-0">
                                <div className='fa fa-user mt-4 mx-auto exclusiv' />
                            </div>
                            <div className="readMessageP w-100  text-center my-2 mx-auto ">

                                <div className="text-capitalize lea font-weight-light" >{this.props.message.first_name} </div>
                                <div className="text-capitalize font-weight-ligh lewt"> {this.props.message.last_name}</div>
                            </div>

                        </div>
                        <div className="readMessageText  w-75 ml-2 pl-2 ">
                            <div className="readMessageTexs  w-100 text-right border-bottom pb-1 text-uppercase font-weight-bold">{this.props.message.subject}</div>
                            <div className="readMessageTex  w-100  mt-2 py-1 pl-2 pr-2 border">{this.props.message.message}</div>

                        </div>
                    </div>
                    <div className="z-depth-1">
                        <div className="py-3 px-1 badge my-3 badge-white z-depth-0 text-primary witi mx-3 w-25">
                            {this.props.messaged.map(ma => <div> <Moment>{ma.dot}</Moment>
                            </div>
                            )}
                        </div>
                        <a href="#" class="trach lop btn text-danger white text-red float-right mt-4  mx-3" onClick={() => {
                            deleteMessage(this.props.message._id)
                        }}><span class="far fa-trash-alt text-red fa-1x ">  </span><span class="text-red"> delete</span></a>
                        <a href="#" class="trach lopa btn text-primary white text-red float-right mt-4 mx-0" onClick={() => {
                            // deleteMessage(message._id)
                        }}><span class="fa fa-reply text-red fa-1x "></span> <span class="text-red">Reply</span></a>

                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    messaged: [state.posts.message],
})
export default connect(mapStateToProps, { fetchMessages })(MessageModal)