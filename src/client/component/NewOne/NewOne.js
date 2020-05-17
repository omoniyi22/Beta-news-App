import React from 'react';
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
import SinglePost from './../singlePost/singlePost';



function Row() {
	return (
		<div className='container-fliud'>
			<div className='row mb-4'>
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
function Row2(props) {
	return (
		<div className='container-fliud'>
			<div className='row px-3'>
				<SinglePost
					prod={props.match.params.id}
				/>
				<NewTwo2 />
			</div>
		</div>
	);
}
function ContactRow() {
	return (
		<div className='container-fliud'>
			<div className='row'>
				<Contact />
			</div>
		</div>
	);
}
function AdvertRow() {
	return (
		<div className='container-fliud'>
			<div className='row'>
				<Advert />
				<NewTwo2 />
			</div>
		</div>
	);
}
function SignUp() {
	return (
		<div className='container-fliud'>
			<div className='row'>
				<Sign />
			</div>
		</div>
	);
}
function SignInRow() {
	return (
		<div className='container-fliud'>
			<div className='row'>
				<SignIn />
			</div>
		</div>
	);
}
function Adminx() {
	return (
		<div className='container-fliud'>
			<div className='row'>
				<Admin />
			</div>
		</div>
	);
}
function Post() {
	return (
		<div className='container-fliud'>
			<div className='row '>
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
