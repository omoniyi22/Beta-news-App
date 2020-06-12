import React, { Component } from 'react';
import './NewOne.css';
import NewsTwo1 from './NewTwo1';
import NewsOne1 from './newsOne1';
import NewsOne3 from './NewsOne3';
import NewsOne2 from './newsOne2';
import NewTwo2 from './NewTwo2';
import Advert from '../Advert/Advert';
import Contact from './../Contact/Contact';
import Sign from './../Sign/Sign';
import SignIn from './../SignIn/signIn';
import Admin from './../Admin/Admin';
import Posts from './../Admin/Post/Posts';
import Nav from './../Nav/Nav'
import Footer from './../Footer/Footer'
import { Switch, Route } from 'react-router-dom';
import Row2 from './../singlePost/singlePost';
import Users from './../Users'
function top() {
	window.pageYOffset = 0
	document.body.scrollTop = 0
	document.documentElement.scrollTop = 0
}


class Row extends Component {
	componentWillMount() {
		top();
	}
	render() {
		return (
			<div className='container-fliud boroww'>
				<div className='row mb-4 '>
					<NewsOne2 />
					<NewsOne1 />
					<NewsOne3 />
				</div>
				<div className='row'>
					<NewsTwo1 />
					<NewTwo2 />
				</div>
			</div>
		);
	}
}

function ContactRow() {
	top();

	return (
		<div className='container-fliud boroww'>
			<div className='row'>
				<Contact />
			</div>
		</div>
	);
}
function AdvertRow() {
	top();
	return (
		<div className='container-fliud boroww'>
			<div className='row'>
				<Advert />
			</div>
			<div className='row'>
				<NewTwo2 />
			</div>
		</div>
	);
}
function SignUp() {
	top();
	return (
		<div className='container-fliud boroww'>
			<div className='row'>
				<Sign />
			</div>
		</div>
	);
}
function SignInRow() {
	top();
	return (
		<div className='container-fliud'>
			<div className='row'>
				<SignIn />
			</div>
		</div>
	);
}
function Adminx() {
	top();
	return (
		<div className='container-fliud boroww'>
			<div className='row'>
				<Admin />
			</div>
		</div>
	);
}
function Post() {
	top();
	return (
		<div className='container-fliud my-0 white boroww'>
			<div className='row my-0'>
				<Posts />
			</div>
		</div>
	);
}

class NewOne extends React.Component {
	constructor() {
		super();
		this.state = {
			toggle: true
		};
	}


	render() {
		window.addEventListener("load", function () { top(); });

		return (
			<div>
				<div className="broro">
					<Nav />
				</div>
				<div className="app appss px-3 mx-4 ">
					<div className="apps">
						<Switch >
							<Route exact path='/post/:id' component={Row2} />
							<Route exact path='/Contact' component={Contact} />
							<Route exact path='/Advert' component={AdvertRow} />
							<Route exact path='/SignUp' component={SignUp} />
							<Route exact path='/SignIn' component={SignInRow} />
							<Route exact path='/Admin' component={Adminx} />
							<Route exact path='/user/' component={Users} />
							<Route exact path='/settings/users' component={Users} />
							<Route path='/' component={Row} />
						</Switch>
					</div>
				</div>
				<Footer />
			</div>

		)
	}
}

export default NewOne;
