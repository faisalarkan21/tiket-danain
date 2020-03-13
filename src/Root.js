import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Profile from './pages/profile';

const Root = () => (
  <div>
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Redirect to="/list-ticket" />}
        />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </Router>
  </div>
);

export default Root;
