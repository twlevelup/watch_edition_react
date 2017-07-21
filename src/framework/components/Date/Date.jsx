import Moment from 'react-moment';
import React from 'react';
import './date.scss';

export default class Watch extends React.Component {
  render() {
    return (
      <div id='date-display'>
        <p className='clock-date'>Date: <Moment format="ddd MMMM DD YYYY"></Moment></p>
      </div>
    );
  }
}
