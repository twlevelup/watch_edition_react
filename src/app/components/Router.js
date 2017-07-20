import React from 'react';
import history from './browserHistory';
import {Router, Route, Switch} from 'react-router-dom';
import ScreenFactory from '../pages/ScreenFactory';

export default class ViewRouter extends React.Component {
  render() {

    let buildRoute = (screenObj, index) => {
      return (<Route exact={ screenObj.isExactPath }
                     path={ screenObj.path } component={ screenObj.component }
                     key={index}
      />);
    };

    const screenFactory = new ScreenFactory();
    const routes = screenFactory.screens.map(buildRoute);

    return (
      <Router history={history}>
        <Switch>
          {routes}
        </Switch>
      </Router>
    );
  }
}
