import React from 'react';
import PropTypes from 'prop-types';

const CounterPage = ({ pageState }) => (
  <div>
    <h1>{pageState.number}</h1>
  </div>
);

CounterPage.propTypes = {
  pageState: PropTypes.shape({ number: PropTypes.number }),
};

CounterPage.defaultProps = {
  pageState: 0,
};

export default CounterPage;
