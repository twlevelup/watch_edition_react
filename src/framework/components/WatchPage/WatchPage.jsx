import React from 'react';
import PropTypes from 'prop-types';

import NotificationPopup from '../NotificationPopup/NotificationPopup';
import Button from '../Button/Button';
import ScreenLayout from '../ScreenLayout/ScreenLayout';

import '../Watch/watch.scss';

export default class WatchPage extends React.Component {
  render() {
    const { children, actions, notificationEvent } = this.props;
    return (
      <div id='watch' className='watch'>
        <div className='strap strap-top' />
        <div id='watch-face' className='case'>
          <NotificationPopup
            show={ notificationEvent.displayNotification }
            text={ notificationEvent.text }
          />
          <Button id='button-right' onClick={ () => actions.right() } />
          <Button id='button-left' onClick={ () => actions.left() } />
          <Button id='button-bottom' onClick={ () => actions.bottom() } />
          <Button id='button-top' onClick={ () => actions.top() } />
          <ScreenLayout>
            { children }
          </ScreenLayout>
        </div>
        <div className='strap strap-bottom' />
      </div>
    );
  }
}

WatchPage.propTypes = {
  children: PropTypes.element.isRequired,
  actions: PropTypes.shape({
    left: PropTypes.func.isRequired,
    right: PropTypes.func.isRequired,
    bottom: PropTypes.func.isRequired,
    top: PropTypes.func.isRequired,
  }).isRequired,
  notificationEvent: PropTypes.shape({
    displayNotification: PropTypes.bool,
    text: PropTypes.string,
  }),
};

WatchPage.defaultProps = {
  notificationEvent: {
    displayNotification: false,
    text: '',
  },
};

