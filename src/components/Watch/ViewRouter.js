import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomeScreen from "./HomeScreen/HomeScreen.jsx";

export default class ViewRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <div className='Page'>
            <Switch>
              <Route path='/' component={ HomeScreen } />
              <Route path='*' component={ HomeScreen } />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
