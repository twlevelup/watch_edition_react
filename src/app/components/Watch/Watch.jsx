import React from 'react';
import PropTypes from 'prop-types';

import './watch.scss';
import Button from '../../../framework/components/Button/Button';
import ViewRouter from '../../../framework/Router/ViewRouter';
import history from '../../../framework/Router/BrowserHistory';
import HomeScreen from '../../pages/HomeScreen/HomeScreen';
import ContactListScreen from '../../pages/ContactListScreen/ContactListScreen';
import NotFoundScreen from '../../pages/NotFoundScreen/NotFoundScreen';
import ScreenLayout from '../../../framework/components/ScreenLayout/ScreenLayout';
import contacts from '../../data/contacts.json';
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

  render() {
    const mapEventHandler = (newHandlers = {}) => {
      this.eventHandlers = Object.assign({}, this.eventHandlers, newHandlers);
    };

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
            <ScreenLayout handlerMapper={ newMap => mapEventHandler(newMap) }>
              <HomeScreen path='/' />
              <ContactListScreen path='/contacts' contacts={ contacts } />
              <NotFoundScreen path='/notfound' />
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
};
