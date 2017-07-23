import React from 'react';
import { Router, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import history from './BrowserHistory';

class ViewRouter extends React.Component {
  render() {
    return (
      <Router history={ history }>
        <Switch>
          { this.props.children }
        </Switch>
      </Router>
    );
  }
}

ViewRouter.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default ViewRouter;
