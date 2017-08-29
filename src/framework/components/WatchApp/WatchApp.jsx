import React from 'react';
import PropTypes from 'prop-types';
import Watch from '../../../framework/components/Watch/Watch';
import './WatchApp.css';
import NotificationForm from '../NotificationForm/NotificationForm';

export default class WatchApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notificationEvent: {
        text: 'Default notification text',
        displayNotification: false,
      },
    };
  }

  notificationHandler = (newEvent) => {
    this.setState({ notificationEvent: newEvent });
  };

  render() {
    const { pages } = this.props;
    return (
      <div id='home-container'>
        <div id='left'>
          <h1>LevelUp Watch Edition</h1>
          <p>This is LevelUp Watch Edition sample app.</p>
          <NotificationForm
            handleEvent={ this.notificationHandler }
            defaultText={ this.state.notificationEvent.text }
          />
        </div>
        <div id='right'>
          <Watch notificationEvent={ this.state.notificationEvent }>
            {
              pages.map(({ path, Component, props = {} }) => (
                <Component key={ `route-${ path }` } path={ path } { ...props } />
              ))
            }
          </Watch>
        </div>
      </div>
    );
  }
}

WatchApp.propTypes = {
  pages: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string.isRequired,
    Component: PropTypes.func,
  })).isRequired,
};
