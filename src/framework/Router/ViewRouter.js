import React from 'react';
import {Router, Switch} from 'react-router-dom';
import history from './BrowserHistory';

export default class ViewRouter extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          { this.props.children }
        </Switch>
      </Router>
    );
  }
}
