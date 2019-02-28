import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Topics from "../pages/Topics";

import Header from "../components/Header";

const Routes = () => (
  <Router>
    <Fragment>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
    </Fragment>
  </Router>
);

export default Routes;
