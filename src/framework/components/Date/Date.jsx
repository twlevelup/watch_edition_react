import Moment from 'react-moment';
import React from 'react';
import './date.scss';

export default class Watch extends React.Component {
  render() {
    const format = this.props.format || 'ddd MMMM DD YYYY';
    return (
      <div id='date-display'>
        <p className='clock-date'>Date: <Moment format={ format } /></p>
      </div>
    );
  }
}
