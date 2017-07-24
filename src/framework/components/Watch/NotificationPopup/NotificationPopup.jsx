import React from 'react';
import PropTypes from 'prop-types';

import './notification_popup.css';

const NotificationPopup = ({ text, show }) => {
  const visibilityClass = show ? '' : 'hidden';
  return (
    <div className={ `notification-popup ${ visibilityClass }` }>
      <p>
        {text}{show}
      </p>
    </div>
  );
};

NotificationPopup.propTypes = {
  show: PropTypes.bool,
  text: PropTypes.string.isRequired,
};

NotificationPopup.defaultProps = {
  show: PropTypes.bool,
};

export default NotificationPopup;
