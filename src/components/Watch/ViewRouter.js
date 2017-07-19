import React from 'react';
import {createBrowserHistory} from 'history';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ScreenFactoryService from './ScreenFactoryService';

export default class ViewRouter extends React.Component {
  render() {
    const screenFactory = new ScreenFactoryService();

    const browserHistory = createBrowserHistory();
    browserHistory.listen(location => {
      console.log(location);
    });

    // just testing how we can handle button config based on page/screen views
    if (browserHistory.location.pathname === '/contacts') {
      this.props.buttonEvents.LEFT.handler = () => {
        alert('This should be modified');
      }
    }

    const buildRoute = (screenObj, index) => {
      return (<Route exact={ screenObj.isExactPath }
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
