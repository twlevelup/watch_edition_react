import Moment from 'react-moment';
import React from 'react';
import PropTypes from 'prop-types';
import './time.css';

const Time = (props) => {
  const { format } = props;
  const oneSecond = 1000;
  return (
    <div id='time-display'>
      <p className='clock-time'>Time: <Moment interval={ oneSecond } format={ format } /></p>
    </div>
  );
};

Time.defaultProps = {
  format: 'HH:mm:ss',
};

Time.propTypes = {
  format: PropTypes.string,
};

export default Time;
