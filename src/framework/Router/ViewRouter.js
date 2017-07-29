import React from 'react';
import { ConnectedRouter } from 'react-router-redux';
import PropTypes from 'prop-types';
import browserHistory from './BrowserHistory';

const ViewRouter = ({ children }) => {
  return (
    <ConnectedRouter history={ browserHistory }>
      { children }
    </ConnectedRouter>
  );
};

ViewRouter.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default ViewRouter;
