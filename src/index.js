import React from 'react';
import ReactDOM from 'react-dom';

import HomeScreen from './app/pages/HomeScreen/HomeScreen';
import CounterScreen from './app/pages/CounterScreen/CounterScreen';
import ContactScreen from './app/pages/ContactListScreen/ContactListScreen';
import ContactViewScreen from './app/pages/ContactViewScreen/ContactViewScreen';
import NotFoundScreen from './app/pages/NotFoundScreen/NotFoundScreen';
import contacts from './app/data/contacts.json';
import WatchApp from './framework';

const pages = [
  { path: '/', Component: HomeScreen },
  { path: '/contacts', Component: ContactScreen, props: { contacts } },
  { path: '/contact-view', Component: ContactViewScreen },
  { path: '/counter', Component: CounterScreen },
  { path: '/notfound', Component: NotFoundScreen },
];

ReactDOM.render(
  <WatchApp pages={ pages } />,
  document.getElementById('root'));
