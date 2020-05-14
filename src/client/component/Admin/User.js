import React from 'react'
import { Component } from 'react';

class User extends Component {
    contructor() {

    }
    render() {
        return (
            <div className="col-12 text-center">
                <div className="row mt-5 px-3 text-center">
                    <div className="col-12 ">USERS</div>
                </div>
                <section id="testimonials" class="row testimonials justify-content-center">
                    <div class="testimonial-item  text-left col-md-3 col-lg-4 col-sm-6 px-0 py-0 my-0">
                        <p className="z-depth-1  ">
                            <div className="busas border white my-3">
                                <div className="border float-left  w-50 white">
                                    <span className="fa fa-user mx-2 "></span> <span className=' user'>Username</span>
                                    <br />
                                    <span className="fa fa-lock mx-2 "></span> <span className=' user'>Username</span>
                                </div>
                                <div className="border float-left w-50 white">
                                    <span className="fa fa-user mx-2"></span> <span className=' user'>Username</span>
                                    <br />
                                    <span className="fa fa-lock mx-2 "></span> <span className=' user'>Username</span>
                                </div>

                                {/* username, password, email, phone */}
                            </div>
                        </p>
                        <img src="assets/img/testimonials/testimonials-1.jpg" class="testimonial-img" alt="" />
                        <b className=' small'>Saul Goodman</b>
                    </div>
                </section>

            </div>
        )
    }
}
export default User