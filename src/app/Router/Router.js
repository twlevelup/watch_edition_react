import React from 'react';
import history from './BrowserHistory';
import {Redirect, Router, Switch} from 'react-router-dom';
import ScreenLayout from '../../framework/components/ScreenLayout/ScreenLayout';
import HomeScreen from '../pages/HomeScreen/HomeScreen';
import NotFoundScreen from '../pages/NotFoundScreen/NotFoundScreen';
import ContactListScreen from '../pages/ContactListScreen/ContactListScreen';

export default class ViewRouter extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <ScreenLayout>
            <HomeScreen path="/"/>
            <ContactListScreen path="/contacts" contacts={[{name:'test', 'Address': 'test address'}]} />
            <NotFoundScreen path="/notfound"/>
            {/*<Redirect to="/notfound"/> // this causes tests to fail. need to look into it*/}
          </ScreenLayout>
        </Switch>
      </Router>
    );
  }
}
