import React from 'react';
import PropTypes from 'prop-types';

const CounterPage = ({ number }) => (
  <div>
    <h1>{number}</h1>
  </div>
);

CounterPage.propTypes = {
  number: PropTypes.number,
};

CounterPage.defaultProps = {
  number: 0,
};

export default CounterPage;
