import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import NewOne from './client/component/NewOne/NewOne';
import { Provider } from 'react-redux'
import store from './client/store'
import * as serviceWorker from './client/serviceWorker';

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			{/* <Router> */}
			<NewOne />
			{/* </Router> */}
		</Provider>
	</BrowserRouter>
	,
	document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
