import React from 'react';
import PropTypes from 'prop-types';

import './watch.scss';
import Button from '../Button/Button';
import ViewRouter from '../../Router/ViewRouter';
import history from '../../Router/BrowserHistory';
import ScreenLayout from '../ScreenLayout/ScreenLayout';
import NotificationPopup from './NotificationPopup/NotificationPopup';


const goToLink = (link) => {
  history.push(link);
};

export default class Watch extends React.Component {

  constructor(props) {
    super(props);

    this.eventHandlers = {
      LEFT: () => { goToLink('/notfound'); },
      RIGHT: () => { goToLink('/notfound'); },
      BOTTOM: () => { goToLink('/notfound'); },
      TOP: () => { goToLink('/notfound'); },
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
