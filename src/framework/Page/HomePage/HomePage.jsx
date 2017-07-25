import React from 'react';
import PropTypes from 'prop-types';
import { mapProps } from 'recompose';

import NotificationForm from '../NotificationForm/NotificationForm';
import WatchApp from '../../watch/WatchApp';

import './HomePage.css';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notificationEvent: {
        text: 'Default notification text',
        displayNotification: false,
      },
    };
  }

  notificationHandler = (newEvent = this.state.notificationEvent) => {
    this.setState({ notificationEvent: newEvent });
  };

  render() {
    const { notificationEvent } = this.state;
    const withNotifications = mapProps(props => ({ ...props, notificationEvent }));
    return (
      <div id='home-container'>
        <div id='left'>
          <h1>LevelUp Watch Edition</h1>
          <p>This is LevelUp Watch Edition sample app.</p>
          <NotificationForm
            defaultText={ notificationEvent.text }
            handleEvent={ this.notificationHandler }
          />
        </div>
        <div id='right'>
          <WatchApp pages={
            this.props.pages.map(({ path, component }) => ({
              path,
              component: withNotifications(component),
            })) }
          />
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  pages: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string.isRequired,
    component: PropTypes.func.isRequired,
  })),
};

HomePage.defaultProps = {
  pages: [],
};
