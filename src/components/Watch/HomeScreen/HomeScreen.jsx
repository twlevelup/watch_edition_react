import React from 'react';
import DateTimeDisplay from '../DateTimeDisplay/DateTimeDisplay';
import HomeScreenContent from './HomeScreenContent';
import './home_screen.scss';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <div id='home-view'>
        <DateTimeDisplay/>

        <HomeScreenContent />
      </div>
    );
  }
};



