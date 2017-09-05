import React from 'react';
import PropTypes from 'prop-types';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import browserHistory from './Router/BrowserHistory';
import WatchApp from './components/WatchApp/WatchApp';
import ButtonActionsReducer from './reducers/ButtonsRemapReducer';
import NotificationReducer from './reducers/NotificationReducer';

const middleware = routerMiddleware(browserHistory);

const reducers = combineReducers({
  ButtonActionsReducer,
  router: routerReducer,
  NotificationReducer,
});

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducers, composeEnhancers(applyMiddleware(middleware)));

const Watch = ({ pages }) => (
  <Provider store={ store }>
    <WatchApp pages={ pages } />
  </Provider>
);

Watch.propTypes = {
  pages: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string.isRequired,
    Component: PropTypes.func,
  })).isRequired,
};

export default Watch;

