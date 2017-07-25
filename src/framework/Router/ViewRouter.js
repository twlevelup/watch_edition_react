import React from 'react';
import { Router, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import history from './BrowserHistory';

const ViewRouter = ({ children }) => {
  return (
    <Router history={ history }>
      <Switch>
        { children }
      </Switch>
    </Router>
  );
};

ViewRouter.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default ViewRouter;
