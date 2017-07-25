import React from 'react';
import ReactDOM from 'react-dom';

import HomeScreen from './app/pages/HomeScreen/HomeScreen';
import NotFoundScreen from './app/pages/NotFoundScreen/NotFoundScreen';
import contacts from './app/data/contacts.json';
import ContactsScreen from './app/pages/ContactListScreen/ContactListScreen';

import createWatchPage from './framework/watch/createWatchPage';
import WatchApp from './framework/Page/HomePage/HomePage';
import { changePage } from './framework/watch/actions';

const homeActions = {
  left: changePage('/notfound'),
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

const pages = [
  { path: '/', component: createWatchPage(homeActions)(HomeScreen) },
  { path: '/contacts', component: createWatchPage(contactsActions, { contacts })(ContactsScreen) },
  { path: '/notfound', component: createWatchPage(notFoundActions)(NotFoundScreen) },
];

ReactDOM.render(<WatchApp pages={ pages } />, document.getElementById('root'));

