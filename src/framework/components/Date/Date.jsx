import PropTypes from 'prop-types';
import Moment from 'react-moment';
import React from 'react';
import './date.scss';

class Watch extends React.Component {
  render() {
    const { format } = this.props;
    return (
      <div id='date-display'>
        <p className='clock-date'>Date: <Moment format={ format } /></p>
      </div>
    );
  }
}

Watch.propTypes = {
  format: PropTypes.string,
};

Watch.defaultProps = {
  format: 'ddd MMMM DD YYYY',
};

export default Watch;
