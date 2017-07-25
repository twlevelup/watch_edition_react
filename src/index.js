import React from 'react';
import ReactDOM from 'react-dom';

import HomeScreen from './app/pages/HomeScreen/HomeScreen';
import NotFoundScreen from './app/pages/NotFoundScreen/NotFoundScreen';

import createWatchPage from './framework/watch/createWatchPage';
import WatchApp from './framework/Page/HomePage/HomePage';
import { changePage } from './framework/watch/actions';

const homeActions = {
  left: changePage('/notfound'),
  right: changePage('/notfound'),
  bottom: changePage('/notfound'),
  top: changePage('/notfound'),
};

const notFoundActions = {
  left: changePage('/'),
  right: changePage('/notfound'),
  bottom: changePage('/notfound'),
  top: changePage('/notfound'),
};
const pages = [
  { path: '/', component: createWatchPage(homeActions)(HomeScreen) },
  { path: '/notfound', component: createWatchPage(notFoundActions)(NotFoundScreen) },
];

ReactDOM.render(<WatchApp pages={ pages } />, document.getElementById('root'));

