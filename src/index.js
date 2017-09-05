import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import browserHistory from './framework/Router/BrowserHistory';

import ButtonActionsReducer from './framework/reducers/ButtonsRemapReducer';
import NotificationReducer from './framework/reducers/NotificationReducer';

import HomeScreen from './app/pages/HomeScreen/HomeScreen';
import CounterScreen from './app/pages/CounterScreen/CounterScreen';
import ContactScreen from './app/pages/ContactListScreen/ContactListScreen';
import NotFoundScreen from './app/pages/NotFoundScreen/NotFoundScreen';
import contacts from './app/data/contacts.json';
import WatchApp from './framework/components/WatchApp/WatchApp';

const middleware = routerMiddleware(browserHistory);

const reducers = combineReducers({
  ButtonActionsReducer,
  router: routerReducer,
  NotificationReducer,
});


export const store = createStore(reducers, applyMiddleware(middleware));
const pages = [
  { path: '/', Component: HomeScreen },
  { path: '/contacts', Component: ContactScreen, props: { contacts } },
  { path: '/counter', Component: CounterScreen },
  { path: '/notfound', Component: NotFoundScreen },
];

ReactDOM.render(
  <Provider store={ store }>
    <WatchApp pages={ pages } />
  </Provider>, document.getElementById('root'));
