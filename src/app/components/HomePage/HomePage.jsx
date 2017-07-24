import React from 'react';
import Watch from '../Watch/Watch';
import './HomePage.scss';
import NotificationForm from '../NotificationForm/NotificationForm';

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
    return (
      <div id='home-container'>
        <div id='left'>
          <h1>LevelUp Watch Edition</h1>
          <p>This is LevelUp Watch Edition sample app.</p>
          <NotificationForm
            defaultText={ this.state.notificationEvent.text }
            handleEvent={ this.notificationHandler }
          />
        </div>
        <div id='right'>
          <Watch notificationEvent={ this.state.notificationEvent } />
        </div>
      </div>
    );
  }
}

