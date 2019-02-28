import React from "react";
import { Route, NavLink } from "react-router-dom";
import Topic from "./Topic";

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <NavLink exact to={`${match.url}/components`}>
          Component
        </NavLink>
      </li>
      <li>
        <NavLink exact to={`${match.url}/state-vs-props`}>
          State vs Props
        </NavLink>
      </li>
    </ul>
    <Route path={`${match.path}/:id`} component={Topic} />
    <Route exact path={match.path} render={() => <h3>Choose a topic</h3>} />
  </div>
);

export default Topics;
