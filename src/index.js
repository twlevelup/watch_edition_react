import React from 'react';
import ReactDOM from 'react-dom';

import HomeScreen from './app/pages/HomeScreen/HomeScreen';
import NotFoundScreen from './app/pages/NotFoundScreen/NotFoundScreen';
import contacts from './app/data/contacts.json';
import ContactsScreen from './app/pages/ContactListScreen/ContactListScreen';
import CounterPage from './app/pages/CounterPage/CounterPage';

import createWatchPage from './framework/watch/createWatchPage';
import WatchApp from './framework/Page/HomePage/HomePage';
import { changePage, changePageState } from './framework/watch/actions';

const homeActions = {
  left: changePage('/counter'),
  right: changePage('/contacts'),
  bottom: changePage('/notfound'),
  top: changePage('/notfound'),
};

const notFoundActions = {
  left: changePage('/'),
  right: changePage('/notfound'),
  bottom: changePage('/notfound'),
  top: changePage('/notfound'),
};

const contactsActions = {
  left: changePage('/'),
  right: changePage('/notfound'),
  bottom: changePage('/notfound'),
  top: changePage('/notfound'),
};

const counterActions = {
  left: changePage('/notFound'),
  right: changePage('/'),
  top: changePageState(state => ({ ...state, number: state.number + 1 })),
  bottom: changePageState(state => ({ ...state, number: state.number - 1 })),
};

const pages = [
  { path: '/', component: createWatchPage(homeActions)(HomeScreen) },
  { path: '/contacts', component: createWatchPage(contactsActions, { contacts })(ContactsScreen) },
  { path: '/counter', component: createWatchPage(counterActions, { number: 0 })(CounterPage) },
  { path: '/notfound', component: createWatchPage(notFoundActions)(NotFoundScreen) },
];

ReactDOM.render(<WatchApp pages={ pages } />, document.getElementById('root'));

