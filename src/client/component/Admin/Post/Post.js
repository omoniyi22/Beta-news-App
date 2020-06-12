import React, { Component } from 'react'
import { upload } from './../../../Actions/postActions'


class Posts extends Component {
    constructor() {
        super()
        this.state = {
            type: "politics",
            title: '',
            description: '',
            picture: '',
            content: '',
            mg: ""
        };

        this.onChange = this.onChange.bind(this)
        this.onChanged = this.onChanged.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.onSetfile = this.onSetfile.bind(this)
    }

    onChange(e) {
        this.setState({ type: e.target.value.toLowerCase() })
        console.log(this.state.type)
    }
    onChanged(e) {
        this.setState({ [e.target.name]: e.target.value })
        console.log(this.state.type)
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
            file: this.state.file,
            filename: this.state.filename,
            type: this.state.type,
            title: this.state.title,
            description: this.state.description,
            picture: this.state.picture,
            content: this.state.content,
        }
        upload(post)

    }
    close() {
        this.setState({ mg: null })
    }
    render() {
        return (
            <div className='contact' >
                <div className="col-12"></div>
                <button type='i' onClick={this.props.cancel} className='text-right mt-4 btn-sm btn mr-0  px-3 radius px-0 ml-4'>
                    <span className="fa fa-arrow-circle-left" /> Back
                </button>

                <div className='contact col-md-7 mx-0 px-0 px-1'>
                    <div className='text-center h2 mb-3 text-uppercase'>POST {this.state.type} NEWS</div>
                    {this.state.mg && <div className="alert alert-primary alert-dismissable fade show col-sm-11 mbottm" role='alert'>
                        <button type="button" className="close text-danger " onClick={this.close = this.close.bind(this)} aria-label="Close"
                            aria-hidden="true">
                            &times;
                            </button>
                        {this.state.mg}
                    </div>}
                    <form className='form row mx-4 pb-2 pt-2' onSubmit={this.onSubmit}>
                        <div className='col-sm-6 mt-2'>
                            <select className="form-control pea"
                                onChange={this.onChange}
                            >
                                <option
                                    name="politics"
                                    required
                                >Politics</option>
                                <option
                                    name="economy"
                                    required
                                >Finance</option>

                                <option
                                    name="entertainment"
                                    required
                                >Entertainment</option>

                                <option
                                    name="sport"
                                    required
                                >Sport</option>
                                <option
                                    name="science"
                                    required
                                >Science</option>
                                <option
                                    name="foreign"
                                    required
                                >Foreign</option>
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
                            <label className="custom-file-label mr-4  px-0" htmlFor='customFile'>
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
                        <div className='col-sm-12 text-center '>
                            <button className='  mt-4 btn-sm btn mr-0 light-blue text-white px-3 radius'>
                                Send <span className='fa fa-paper-plane pl-1' />
                            </button>
                        </div>
                        <div className='col-sm-12' />
                    </form>
                </div>
            </div>
        )
    }
}

export default Posts
