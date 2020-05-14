import React from "react";
import Nav from "./component/Nav/Nav";
import NewOne from "./component/NewOne/NewOne";
import Footer from "./component/Footer/Footer";
import { Provider } from 'react-redux'
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom"
import store from './store'
import Admin from './component/Admin/Admin'
import signIn from "./component/SignIn/signIn";
import Sign from "./component/Sign/Sign";
import Contact from "./component/Contact/Contact";
import { BrowserRouter } from 'react-router-dom';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toggle: true
    };
    this.Toggle = this.Toggle.bind(this);
  }

  Toggle() {
    this.setState(prevState => {
      return {
        toggle: !prevState.toggle
      };
    });
  }

  render() {
    const Main = () => (
      <div>
        <Nav toggle={this.Toggle} />
        <div className="app px-3 mx-4">
          <NewOne />
        </div>
        <Footer />
      </div>
    )
    return (
      <Provider store={store}>

        <Router>
          <Switch>
            <Route exact path='/Admin' component={Admin} />
            <Route exact path='/Contact' component={Contact} />
            <Route exact path='/signup' component={Sign} />
            <Route exact path='/signin' component={signIn} />
            <Route exact path='/advert' component={Main} />
            <Route exact path='/post' component={Main} />
            <Route path='/' exact component={Main} />
          </Switch>
        </Router>
      </Provider>

    );
  }
}

export default App;
