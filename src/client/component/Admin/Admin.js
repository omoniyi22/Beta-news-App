import React, { Component } from 'react'
import { Link } from 'react-router-dom/'
import { upload } from './../../Actions/postActions'
import './Admin.css'
import Post from './Post/Post'
import Posts from './Post/Posts'
import Message from './Message'
import User from './User'


class Admin extends Component {
    constructor() {
        super()

        // - type,
        // - title,
        // - description,
        // - picture,
        // user,
        // comment,
        // - content,
        // views

        this.state = {
            option: "users",
            title: '',
            description: '',
            picture: '',
            content: '',
            home: true
        };

        this.onChange = this.onChange.bind(this)
        this.onChanged = this.onChanged.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.onSetfile = this.onSetfile.bind(this)
    }

    onChange(e) {

        this.setState({ type: e.target.value.toLowerCase() })
        console.log(this.state)
    }
    onChanged(e) {
        e.preventDefault()
        this.setState({ option: e.target.name, home: false })
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
            .then(res => {
                this.setState({
                    file: "",
                    filename: "",
                    type: "politics",
                    title: '',
                    description: '',
                    picture: '',
                    content: '',
                    mg: res
                })
            })
    }


    close() {
        this.setState({ mg: null })
    }


    render() {
        let Admin = (
            <section id="team" class="team">
                <div class="container">
                    <div class="section-title" data-aos="fade-up">
                        <h2 className="font-weight-light underline">ADMIN</h2>
                    </div>
                    <div class="row">
                        <div class="col-lg-3 col-md-3 col-sm-3">
                            <div class="member" data-aos="zoom-in">
                                <div class="pic pico"><div className="fa fa-blog fa-lg " alt="" /></div>
                                <div class="member-info z-depth-2">
                                    <span className="text-underline"> <Link name='post' onClick={this.onChanged}>Post</Link> <Link name='update' onClick={this.onChanged}>Update</Link></span>

                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-3 col-sm-3">
                            <div class="member" data-aos="zoom-in" data-aos-delay="100">
                                <div class="pic pico"><div className="fa fa-user fa-lg " alt="" /></div>
                                <div class="member-info z-depth-2">
                                    <span className="text-underline"> <Link name='isers' onClick={this.onChanged}>View All Users</Link></span>

                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-3">
                            <div class="member" data-aos="zoom-in" data-aos-delay="200">
                                <div class="pic pico"><div className="fa fa-envelope fa-lg " alt="" /></div>
                                <div class="member-info z-depth-2">
                                    <span className="text-underline"> <Link name='message' onClick={this.onChanged}>View Messages</Link></span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3">
                            <div class="member" data-aos="zoom-in" data-aos-delay="200">
                                <div class="pic pico"><div className="fa fa-industry fa-lg " alt="" /></div>
                                <div class="member-info z-depth-2">
                                    <span className="text-underline"> <Link name='advert' onClick={this.onChanged}>Advert</Link></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>)


        let Page = () => {
            switch (this.state.option) {
                case 'post':
                    return <Post cancel={() => { this.setState({ home: true }) }} />
                case 'update':
                    return <Posts cancel={() => { this.setState({ home: true }) }} />
                case 'users':
                    return <User />
                case 'message':
                    return <Message cancel={() => { this.setState({ home: true }) }} />
                // case 'advert':
                //     return <Advert />
                default:
                    return Admin
            }
        }
        return (
            this.state.home ? (Admin
            ) : (
                    <Page />
                )
        )
    }
}

export default Admin