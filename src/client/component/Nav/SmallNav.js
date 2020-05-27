import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { changeNav } from './../../Actions/postActions'

function SmallNav(props) {

    return (
        <nav class="nav-menu navsmeu  d-lg-block">
            <nav class="navbar navbar-light whiteout navbar-1  ">
                <div class="navbar-collapse  " id="navbarSupportedContent15">
                    <ul class="navbar-nav mr-auto ">
                        <li class="nav-item ff px-0 border-top border-bottom border- pl-4" onClick={() => props.fun()}>
                            <Link class="nav-link nav-link ff font-weight-bold my-3 text-white" to="/"><span className="fa fa-home mx-2" /> Home<span class="sr-only">(current)</span></Link>
                        </li>
                        {/* <button class="nav-item ff atin px-0 border-bottom border- pl-4">
                            <a class="nav-link font-weight-normal  cati" href="#" data-toggle='dropdown' aria-haspopup="true">Categories<span class="sr-only">(current)</span>
                                <span className className="dropdown-toggle float-right mt-2" />
                                <ul className="dropdowned">
                                    <li className="border-bottom border-top mt-2 black-text"><a href="#about" className="black-text">Politics</a></li>
                                    <li className="border-bottom border-top mt-2 black-text"><a href="#about" className="black-text">Politics</a></li>
                                    <li className="border-bottom border-top mt-2 black-text"><a href="#about" className="black-text">Politics</a></li>
                                    <li className="border-bottom border-top mt-2 black-text"><a href="#about" className="black-text">Politics</a></li>
                                    <li className="border-bottom border-top mt-2 black-text"><a href="#about" className="black-text">Politics</a></li>
                                    <li className="border-bottom border-top mt-2 black-text"><a href="#about" className="black-text">Politics</a></li>

                                </ul>
                            </a>
                        </button> */}
                        <li class="nav-item ff px-0 border-bottom border- pl-4" onClick={() => props.fun()}>
                            <Link class="nav-link d font-weight-bold my-3 text-white " to="/advert"><span className="fa fa-pager mx-2" /> Place-Ads<span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item ff border-bottom border- pl-4" onClick={() => props.fun()}>
                            <Link class="nav-link d font-weight-bold my-3 text-white" to="/SignUp"><span className="fa fa-user-plus mx-2" /> sign-up<span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item ff border-bottom border- pl-4" onClick={() => props.fun()}>
                            <Link class="nav-link d font-weight-bold my-3 text-white" to="/SignIn"><span className="fa fa-sign-in-alt mx-2" /> sign-in<span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item ff border-bottom border- pl-4" onClick={() => props.fun()}>
                            <Link class="nav-link d font-weight-bold my-3 text-white" to="/Contact"><span className="fa fa-phone mx-2" /> contact<span class="sr-only">(current)</span></Link>
                        </li>


                    </ul>
                </div>
            </nav>


        </nav>

    )
}


export default SmallNav