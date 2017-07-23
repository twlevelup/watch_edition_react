import React from 'react';
import PropTypes from 'prop-types';

import { Router, Switch, Route } from 'react-router-dom';
import history from '../Router/BrowserHistory';

const WatchRoute = ({ path, component }) => (
  <Route key={ `route-${ path }` } exact path={ path } component={ component } history={ history } />
);

WatchRoute.propTypes = {
  path: PropTypes.string.isRequired,
  component: PropTypes.element.isRequired,
};

const WatchApp = ({ pages }) => (
  <Router history={ history }>
    <Switch>
      { pages.map(WatchRoute) }
    </Switch>
  </Router>
);

WatchApp.propTypes = {
  pages: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string.isRequired,
    component: PropTypes.func.isRequired,
  })),
};

WatchApp.defaultProps = {
  pages: [],
};

export default WatchApp;
