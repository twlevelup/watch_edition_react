import React from 'react';
import history from './BrowserHistory';
import {Router, Switch} from 'react-router-dom';
import ScreenLayout from '../components/ScreenLayout/ScreenLayout';

export default class ViewRouter extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <ScreenLayout>
            { this.props.children }
          </ScreenLayout>
        </Switch>
      </Router>
    );
  }
}
