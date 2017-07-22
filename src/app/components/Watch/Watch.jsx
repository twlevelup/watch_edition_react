import React from 'react';
import './watch.scss';
import Button from "../../../framework/components/Button/Button";
import ViewRouter from '../../../framework/Router/ViewRouter';
import history from '../../../framework/Router/BrowserHistory';
import HomeScreen from "../../pages/HomeScreen/HomeScreen";
import ContactListScreen from "../../pages/ContactListScreen/ContactListScreen";
import NotFoundScreen from "../../pages/NotFoundScreen/NotFoundScreen";
import ScreenLayout from "../../../framework/components/ScreenLayout/ScreenLayout"
import contacts from '../../data/contacts.json';


export default class Watch extends React.Component {

  constructor() {
    super();
    let goToLink = (link) => {
      history.push(link);
    };

    this.eventHandlers = {
      LEFT: () => {
        goToLink('/notfound');
      },
      RIGHT: () => {
        goToLink('/notfound');
      },
      BOTTOM: () => {
        goToLink('/notfound');
      },
      TOP:  () => {
        goToLink('/notfound');
      }
    };
  }

  render() {

    let mapEventHandler = (newHandlers = {}) => {
      this.eventHandlers = Object.assign({}, this.eventHandlers, newHandlers)
    };

    return (
      <div id='watch' className='watch'>
        <div className='strap strap-top' />
        <div id='watch-face' className='case'>
          <Button id="button-right" onClick={() => this.eventHandlers.RIGHT()} />
          <Button id="button-left" onClick={() => this.eventHandlers.LEFT()} />
          <Button id="button-bottom" onClick={() => this.eventHandlers.BOTTOM()} />
          <Button id="button-top" onClick={() => this.eventHandlers.TOP()} />
          <ViewRouter>
            <ScreenLayout handlerMapper={newMap => mapEventHandler(newMap)}>
              <HomeScreen path="/" />
              <ContactListScreen path="/contacts" contacts={contacts} />
              <NotFoundScreen path="/notfound" />
            </ScreenLayout>
          </ViewRouter>
        </div>
        <div className='strap strap-bottom' />
      </div>
    );
  }
}
