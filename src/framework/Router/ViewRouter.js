import React from 'react';
import { Router, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import history from './BrowserHistory';

export default class ViewRouter extends React.Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]).isRequired,
  }
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
