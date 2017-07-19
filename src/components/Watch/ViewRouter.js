import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./Home/Home.jsx";

export default class ViewRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <div className='Page'>
            <Switch>
              <Route path='/' component={ Home } />
              <Route path='*' component={ Home } />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}


