import React from 'react';
import {
  BrowserRouter as Router, Redirect, Route, Switch,
} from 'react-router-dom';
import Profile from './pages/profile';
import App from './App';

const Root = () => (
  <div>
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Redirect to="/list-person" />}
        />
        <Route exact path="/list-person" component={App} />
        <Route path="/list-person/profile" component={Profile} />
      </Switch>
    </Router>
  </div>
);

export default Root;
