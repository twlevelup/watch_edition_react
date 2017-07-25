import React from 'react';
import PropTypes from 'prop-types';

import './watch.css';
import Button from '../Button/Button';
import ViewRouter from '../../Router/ViewRouter';
import ButtonAction from '../../util/ButtonAction';
import ScreenLayout from '../ScreenLayout/ScreenLayout';
import NotificationPopup from './NotificationPopup/NotificationPopup';

export default class Watch extends React.Component {

  constructor(props) {
    super(props);

    this.eventHandlers = {
      LEFT: () => { ButtonAction.goToPage('/notfound'); },
      RIGHT: () => { ButtonAction.goToPage('/notfound'); },
      BOTTOM: () => { ButtonAction.scrollDown('.screen-layout'); },
      TOP: () => { ButtonAction.scrollUp('.screen-layout'); },
    };
  }

  mapEventHandler = (newHandlers = {}) => {
    this.eventHandlers = Object.assign({}, this.eventHandlers, newHandlers);
  };


  render() {
    return (
      <div id='watch' className='watch'>
        <div className='strap strap-top' />
        <div id='watch-face' className='case'>
          <NotificationPopup
            show={ this.props.notificationEvent.displayNotification }
            text={ this.props.notificationEvent.text }
          />

          <Button id='button-right' onClick={ () => this.eventHandlers.RIGHT() } />
          <Button id='button-left' onClick={ () => this.eventHandlers.LEFT() } />
          <Button id='button-bottom' onClick={ () => this.eventHandlers.BOTTOM() } />
          <Button id='button-top' onClick={ () => this.eventHandlers.TOP() } />
          <ViewRouter>
            <ScreenLayout handlerMapper={ newMap => this.mapEventHandler(newMap) }>
              {this.props.children}
            </ScreenLayout>
          </ViewRouter>
        </div>
        <div className='strap strap-bottom' />
      </div>
    );
  }
}

Watch.propTypes = {
  notificationEvent: PropTypes.shape({
    displayNotification: PropTypes.bool,
    text: PropTypes.string,
  }).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
