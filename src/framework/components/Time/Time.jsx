import Moment from 'react-moment';
import React from 'react';
import './time.scss';

export default class Watch extends React.Component {
  render() {
    let format = this.props.format || 'HH:mm:ss';
    return (
      <div id='time-display'>
        <p className='clock-time'>Time: <Moment interval={1000} format={format}></Moment></p>
      </div>
    );
  }
}
