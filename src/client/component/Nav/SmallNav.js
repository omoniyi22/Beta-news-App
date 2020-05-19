import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { changeNav } from './../../Actions/postActions'

function SmallNav(props) {

    return (<div className="mobile-naav animated  fast fadeInLeftBig position-fixed  mr-2 mt-0" >
        <nav class="nav-menu navsmeu  d-lg-block">
            <nav class="navbar navbar-light whiteout navbar-1  ">
                <div class="navbar-collapse  " id="navbarSupportedContent15">
                    <ul class="navbar-nav mr-auto ">
                        <li class="nav-item px-0 border-top border-bottom border-danger pl-4" onClick={() => props.fun()}>
                            <Link class="nav-link" to="/">Home<span class="sr-only">(current)</span></Link>
                        </li>
                        {/* <button class="nav-item atin px-0 border-bottom border-danger pl-4">
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
                        <li class="nav-item px-0 border-bottom border-danger pl-4" onClick={() => props.fun()}>
                            <Link class="nav-link" to="/advert">Place-Ads<span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item border-bottom border-danger pl-4" onClick={() => props.fun()}>
                            <Link class="nav-link" to="/SignUp">sign-up<span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item border-bottom border-danger pl-4" onClick={() => props.fun()}>
                            <Link class="nav-link" to="/SignIn">sign-in<span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item border-bottom border-danger pl-4" onClick={() => props.fun()}>
                            <Link class="nav-link" to="/Contact">contact<span class="sr-only">(current)</span></Link>
                        </li>
                    </ul>
                </div>
            </nav>


        </nav>
    </div>)
}


export default SmallNav