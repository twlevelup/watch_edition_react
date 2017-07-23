import Moment from 'react-moment';
import React from 'react';
import PropTypes from 'prop-types';

import './time.scss';

const Time = (props) => {
  const { format } = props;
  return (
    <div id='time-display'>
      <p className='clock-time'>Time: <Moment interval={ 1000 } format={ format } /></p>
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
