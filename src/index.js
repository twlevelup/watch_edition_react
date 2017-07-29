import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import browserHistory from './framework/Router/BrowserHistory';

import HomePage from './app/components/HomePage/HomePage';
import ButtonActionsReducer from './framework/reducers/ButtonsRemapReducer';

const middleware = routerMiddleware(browserHistory);

const reducers = combineReducers({
  ButtonActionsReducer,
  router: routerReducer,
});


export const store = createStore(reducers, applyMiddleware(middleware));
ReactDOM.render(
  <Provider store={ store }>
    <HomePage />
  </Provider>, document.getElementById('root'));

