import React, { Component } from 'react'
import Result from './result'
import { Link } from 'react-router-dom'
import { changeNav } from './../../Actions/postActions'

class Search extends Component {
    render() {
        return (<div className="mobile-naav  position-fixed  mr-2 mt-0" >
            <nav class="nav-menu navsmeu  d-lg-block">
                <nav class="navbar navbar-light whiteout navbar-1  ">
                    <div class="navbar-collapse  " id="navbarSupportedContent15">
                        <ul class="navbar-nav mr-auto border ">
                            <Result fun={this.props.fun} />
                        </ul>
                    </div>
                </nav>
            </nav>
        </div>)
    }
}


export default Search