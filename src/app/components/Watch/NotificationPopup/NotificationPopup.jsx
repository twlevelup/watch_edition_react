import React from 'react';
import './notification_popup.scss'

export default class NotificationPopup extends React.Component {
  render() {
    let visibilityClass = this.props.show ? '' : 'hidden';
    return (
      <div className={'notification-popup ' + visibilityClass}>
        <p>
          {this.props.text} {this.props.show}
        </p>
      </div>
    );
  }
}
