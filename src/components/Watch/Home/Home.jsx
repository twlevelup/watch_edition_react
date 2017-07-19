import React from 'react';
import DateTimeDisplay from '../DateTimeDisplay/DateTimeDisplay';
import HomeScreenContent from './HomeScreenContent';
import './home.scss';

export default class Home extends React.Component {
  render() {
    return (
      <div id='home-view'>
        <DateTimeDisplay/>

        <HomeScreenContent />
      </div>
    );
  }
};



