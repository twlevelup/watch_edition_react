import Moment from 'react-moment';
import React from 'react';
import './date_time_display.scss';

export default class Watch extends React.Component {
  render() {
    return (
      <div id='date-time-display'>
        <p className='clock-date'>Date: <Moment format="ddd MMMM DD YYYY"></Moment></p>
        <p className='clock-time'>Time: <Moment interval={1000} format="HH:mm:ss"></Moment></p>
      </div>
    );
  }
}
