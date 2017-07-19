import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import WatchScreen from './WatchScreen/WatchScreen';
import HomeScreen from './WatchScreen/HomeScreen/HomeScreen';
import ContactListScreen from './WatchScreen/ContactListScreen/ContactsScreen';

export default class ViewRouter extends React.Component {
  render() {
    let test = () => {
      return ContactListScreen([{name:'sinan'}]);
    }
    return (
      <BrowserRouter>
        <div className='App'>
          <div className='Page'>
            <Switch>
              <Route exact path='/' component={ () => {return <WatchScreen content={ HomeScreen } />} } />
              <Route path='/contacts' component={ () => {return <WatchScreen content={ test } />} } />
              <Route path='/test' component={ () =>  {return <div>test!!!</div>} } />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
