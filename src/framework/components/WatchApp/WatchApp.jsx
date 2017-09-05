import React from 'react';
import PropTypes from 'prop-types';
import Watch from '../../../framework/components/Watch/Watch';
import './WatchApp.css';
import NotificationForm from '../NotificationForm/NotificationForm';

const WatchApp = ({ pages }) => {
  return (
    <div id='home-container'>
      <div id='left'>
        <h1>LevelUp Watch Edition</h1>
        <p>This is LevelUp Watch Edition sample app.</p>
        <NotificationForm />
      </div>
      <div id='right'>
        <Watch>
          {
            pages.map(({ path, Component, props = {} }) => (
              <Component key={ `route-${ path }` } path={ path } { ...props } />
            ))
          }
        </Watch>
      </div>
    </div>
  );
};

WatchApp.propTypes = {
  pages: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string.isRequired,
    Component: PropTypes.func,
  })).isRequired,
};

export default WatchApp;
