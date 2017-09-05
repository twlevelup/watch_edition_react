import React from 'react';
import PropTypes from 'prop-types';
import NotificationContainer from '../../../containers/NotificationContainer';
import './notification_popup.css';

export const NotificationPopupComp = ({ show, text }) => {
  const visibilityClass = show ? '' : 'hidden';
  return (
    <div className={ `notification-popup ${ visibilityClass }` }>
      <p>
        {text}{show}
      </p>
    </div>
  );
};

NotificationPopupComp.propTypes = {
  show: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default NotificationContainer(NotificationPopupComp);
