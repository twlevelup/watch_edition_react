import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ScreenFactoryService from './ScreenFactoryService';

export default class ViewRouter extends React.Component {
  render() {
    const screenFactory = new ScreenFactoryService();
    const buildRoute = (screenObj, index) => {
      return (<Route
        exact={ screenObj.isExactPath }
        path={ screenObj.path } component={ screenObj.component }
        key={index}
      />);
    };
    const routes = screenFactory.screens.map(buildRoute);
    return (
      <BrowserRouter>
        <Switch>
          {routes}
        </Switch>
      </BrowserRouter>
    );
  }
}
