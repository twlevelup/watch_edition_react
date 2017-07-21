import React from 'react';
import './watch.scss';
import Button from "../../../framework/components/Button/Button";
import ViewRouter from '../../../framework/Router/ViewRouter';
import history from '../../../framework/Router/BrowserHistory';
import HomeScreen from "../../pages/HomeScreen/HomeScreen";
import ContactListScreen from "../../pages/ContactListScreen/ContactListScreen";
import NotFoundScreen from "../../pages/NotFoundScreen/NotFoundScreen";

export default class Watch extends React.Component {


  render() {
    let goToLink = (link) => {
      history.push(link);
    };

    // todo: where do we put this? should we create some sort of service that we pass around to other components?
    let buttonEvents = {
      LEFT: {
        handler: () => {
          goToLink('/');
        }
      },
      RIGHT: {
        handler: () => {
          goToLink('/contacts');
        }
      },
      BOTTOM: {
        handler: () => {
          goToLink('/notfound');
        }
      },
      TOP: {
        handler: () => {
          goToLink('/notfound');
        }
      }
    };

    return (
      <div id='watch-container'>
        <div id='watch' className='watch'>
          <div className='strap strap-top'/>
          <div id='watch-wrapper'>
            <div id='watch' className='case'>
              <Button id="button-right" onClick={buttonEvents.RIGHT}/>
              <Button id="button-left" onClick={buttonEvents.LEFT}/>
              <Button id="button-bottom" onClick={buttonEvents.BOTTOM}/>
              <Button id="button-top" onClick={buttonEvents.TOP}/>
              <ViewRouter>
                <HomeScreen path="/"/>
                <ContactListScreen path="/contacts" contacts={[{name:'test', 'Address': 'test address'}]} />
                <NotFoundScreen path="/notfound"/>
              </ViewRouter>
            </div>
          </div>
          <div className='strap strap-bottom'/>
        </div>
      </div>
    );
  }
}
