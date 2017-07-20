import React from 'react';
import history from './browserHistory';
import {Router, Route, Switch} from 'react-router-dom';
import ScreenLayout from '../../framework/components/ScreenLayout/ScreenLayout';
import HomeScreen from '../pages/HomeScreen/HomeScreen';
import ContactListScreen from '../pages/ContactListScreen/ContactsScreen';

export default class ViewRouter extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <ScreenLayout>
            <HomeScreen path="/"/>
            <ContactListScreen path="/contacts" contacts={[{name:'test'}]} />
          </ScreenLayout>
        </Switch>
      </Router>
    );
  }
}
