import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { update } from './../../../ClientAPIs'
import { deletePost, fetchPosts, editPost } from "../../../Actions/postActions";
import axios from 'axios'



class Update extends Component {
    constructor(props) {
        super(props)
        this.state = {
            type: props.edit.type,
            title: props.edit.title,
            description: props.edit.description,
            picture: props.edit.picture,
            content: props.edit.content,
            comment: props.edit.comments.length,
            comments: "all",
            views: Number(props.edit.views),
            view: Number(props.edit.views),
            mg: "",
            allOn: false,
            viewOn: false
        };

        // this.onChange = this.onChange.bind(this)
        this.onChanged = this.onChanged.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.onSetfile = this.onSetfile.bind(this)
        this.allOn = this.allOn.bind(this)
        this.allOnChange = this.allOnChange.bind(this)
        this.viewOn = this.viewOn.bind(this)
        this.viewOnChange = this.viewOnChange.bind(this)
    }

    componentWillMount() {
        this.props.fetchPosts()
    }
    allOnChange(e) {
        this.setState({
            comment: e.target.value
        })
    }
    allOn() {
        this.setState((prev) => {
            return {
                allOn: !prev.allOn,
                comment: 'all'
            }
        })
    }
    viewOn() {
        this.setState((prev) => {
            return {
                viewOn: !prev.viewOn,
                views: this.state.views
            }
        })
    }
    viewOnChange(e) {
        this.setState({
            views: e.target.value
        })
    }

    onChanged(e) {
        this.setState({ [e.target.name]: e.target.value })
        console.log(this.state)
    }
    onSetfile(e) {
        this.setState({
            file: e.target.files[0] && e.target.files[0],
            filename: e.target.files[0] !== undefined && e.target.files[0].name,
            picture: e.target.files[0] !== undefined && e.target.files[0].name
        })
        console.log(this.state.file)
    }
    onSubmit(e) {
        e.preventDefault()
        const post = {
            type: this.state.type,
            file: this.state.file,
            filename: this.state.filename,
            // type: this.state.type,
            title: this.state.title,
            description: this.state.description,
            picture: this.state.picture,
            content: this.state.content,
            id: this.props.edit._id
        }
        console.log(this.state.file, this.state.filename, this.state.picture)
        update(post)
            .then(res => {
                this.setState({
                    file: null,
                    filename: null,
                    mg: res.msg
                })
                console.log(res)
            })
    }
    close() {
        this.setState({ mg: null })
    }
    render() {
        return (
            <div className='contact' >

                <div className='contact col-md-7 mx-5 px-1'>
                    <div className='text-center h2 mb-3 text-uppercase'>POST {this.state.type} NEWS</div>
                    {this.state.mg && <div className="alert alert-primary alert-dismissable fade show col-sm-11 mbottm w-50 border-none white" role='alert'>
                        <button type="button" className="close text-danger " onClick={this.close = this.close.bind(this)} aria-label="Close"
                            aria-hidden="true">
                            &times;
                            </button>
                        {this.state.mg}
                    </div>}
                    <form className='form row mx-4 pb-2 pt-2' noValidate onSubmit={this.onSubmit}>
                        <div className='col-sm-6 mt-2'>
                            <select className="form-control pea" disabled
                                onChange={this.onChange}
                            >
                                <option
                                    name="foreign"
                                    required
                                >{this.state.type}
                                </option>
                            </select>
                        </div>

                        <div className='col-sm-6 mt-2'>
                            <input placeholder='Title' className='last-name w-100 form-control h-100'
                                name='title'
                                onChange={this.onChanged}
                                value={this.state.title}
                                required />
                        </div>

                        <div className='col-sm-12 filecharge mt-2 ml-3 mr-1'>
                            <input placeholder='Picture' type="file"
                                className='last-name  w-100  custom-file-input'
                                id='customFile'
                                // value=""
                                onChange={this.onSetfile}
                            />
                            <label className="  custom-file-label mr-4  px-0" htmlFor='customFile'>
                            </label>

                        </div>

                        <div className='col-sm-12 mt-0 description'>
                            <input placeholder='Description' className='last-name w-100 form-control description'
                                name='description'
                                onChange={this.onChanged}
                                value={this.state.description}
                                required />
                        </div>
                        <div className='col-sm-12 mt-3'>
                            <textarea placeholder='Content' className='contents w-100 form-control'
                                name='content'
                                onChange={this.onChanged}
                                value={this.state.content}
                                required />
                        </div>
                        <div className='w-100'>
                            <div className=' mt-3 float-left small ml-3  mr-0'>
                                <span className="fa fa-trash-alt checg font-weight-bold btn text-danger border-danger" onClick={() => {
                                    let data = [this.props.edit.type, this.props.edit._id, this.state.comment];
                                    axios.post(`Admin/comment/${data[0]}/${data[1]}`,
                                        { comment: data[2] }
                                    )
                                        .then(res => {
                                            this.setState({ comment: res.data.politic.comments.length - 1 })
                                            console.log(res.data)
                                        })

                                }
                                } /> <input type="number" min='0' max={this.props.edit.comments.length} value={this.state.comment} disabled={this.state.allOn && 'disabled'} onChange={this.allOnChange} className="border-primary smallet" /> <span className="fa fa-comment-dots fa-3x checg font-weight-bold text-success" /> | <span className="fa fa-comments fa-1x font-weight-bold text-success" />
                            </div>
                            <div className='col-md-3 col-sm-3  float-left col-1 mt-3 small jed'>
                                <span onClick={this.allOn}>{!this.state.allOn ? <btn className="chec border fa fa-toggle-off fa-lg text-primary white" /> : <span className="chec border fa fa-toggle-on fa-lg text-danger white" />}</span>
                            </div>
                            <div className=' mt-3 float-right small ml-0 float-left mr-2 mwiew' style={{ "visibility": this.state.viewOn ? "hidden" : "visible" }} onClick={
                                () => {

                                    let data = [this.props.edit.type, this.props.edit._id, this.state.views];
                                    axios.post(`Admin/delete/views/${data[0]}/${data[1]}`,
                                        { remove: this.state.views }
                                    )
                                        .then(res => res.data)
                                        .then(dat => {
                                            console.log(dat)
                                            this.setState({
                                                views: dat.politics,
                                                view: dat.politics,
                                                mg: dat.msg
                                            })
                                        })

                                    // dispatch({
                                    //     type: DELETE_POST,
                                    //     payload: res.data.politics
                                    // });


                                }
                            }>
                                <span className="fa fa-trash-alt checg font-weight-bold btn text-danger border-danger" />
                            </div>
                            <div className=' mt-2 float-right small ml-1 float-left mr-0 mmwiew'>
                                <span onClick={this.viewOn}>{!this.state.viewOn ? <span className="fa fa-eye neye text-primary " /> : <span className="fa fa-eye-slash neyey text-danger" />}</span>
                            </div>
                            <div className=' mt-3 float-right small ml-1 float-left mr-0 mwiew'>
                                <input disabled={this.state.viewOn && 'disabled'} type="number" min='0' value={this.state.views} max={this.state.views} onChange={this.viewOnChange} className="border-primary smallet" />
                            </div>
                            <div style={{ "visibility": this.state.viewOn ? "hidden" : "visible" }} className=' mt-3 float-right small ml-1 float-left mr-1 mwiew' onClick={
                                () => {
                                    let data = [this.props.edit.type, this.props.edit._id, this.state.views];
                                    axios.post(`Admin/views/${data[0]}/${data[1]}`,
                                        { views: this.state.views }
                                    )
                                        .then(res => res.data)
                                        .then(dat => {
                                            this.setState({
                                                views: dat.politics,
                                                view: dat.politics,
                                                mg: dat.msg
                                            })
                                            console.log(dat)
                                        })

                                    // dispatch({
                                    //     type: DELETE_POST,
                                    //     payload: res.data.politics
                                    // });


                                }



                            }>
                                <span className="fa fa-plus text-success border-success fa-sm checg btn px-2 mx-0" />
                            </div>
                            <div className=' mt-2 text-center col-12 float-right mr-3  text-center'>
                                <button className='  mt-3 btn-sm btn mr-0 light-blue text-white px-3 radius'>
                                    Send <span className='fa fa-paper-plane pl-1' />
                                </button>
                            </div>
                        </div>
                        <div className='col-sm-12' />
                        <button type='i' onClick={this.props.cancel} className=' mt-4 btn-sm btn ml-3  px-3 radius px-0'>
                            <span className="fa fa-arrow-circle-left" /> Back
                </button>
                    </form>
                </div>


            </div>
        )
    }
}
let mapStatetoProps = state => ({
    edit: state.posts.edit
});




export default connect(mapStatetoProps, { fetchPosts })(Update);