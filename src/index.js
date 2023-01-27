import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Switch,
} from "react-router-dom";
import Home from "./components/home";

import About from "./components/about";
import Faq from "./components/faq";
import ComingSoon from "./components/coming-soon";
import Error from "./components/404";

import Properties from "./components/properties";
import PropertyDetails from "./components/property-details";

import Contact from "./components/contact";
import MyAccount from "./components/my-account";
import Login from "./components/login";
import Register from "./components/register";

class Root extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <div>
          <Switch>
            <Route exact path="/" component={Home} />

            <Route path="/about" component={About} />
            <Route path="/faq" component={Faq} />
            <Route path="/coming-soon" component={ComingSoon} />
            <Route path="/404" component={Error} />
            <Route path="/properties" component={Properties} />

            <Route path="/property-details" component={PropertyDetails} />

            <Route path="/contact" component={Contact} />
            <Route path="/my-account" component={MyAccount} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default Root;

ReactDOM.render(<Root />, document.getElementById("quarter"));
