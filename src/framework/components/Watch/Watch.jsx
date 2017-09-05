import React from 'react';
import PropTypes from 'prop-types';

import './watch.css';
import ViewRouter from '../../Router/ViewRouter';
import ScreenLayout from '../ScreenLayout/ScreenLayout';
import NotificationPopup from './NotificationPopup/NotificationPopup';
import ButtonContainer from '../../containers/ButtonContainer';

const Watch = ({ children }) => {
  return (
    <div id='watch' className='watch'>
      <div className='strap strap-top' />
      <div id='watch-face' className='case'>
        <NotificationPopup />
        <ButtonContainer id='button-right' type='RIGHT' />
        <ButtonContainer id='button-left' type='LEFT' />
        <ButtonContainer id='button-bottom' type='BOTTOM' />
        <ButtonContainer id='button-top' type='TOP' />
        <ViewRouter>
          <ScreenLayout>
            { children }
          </ScreenLayout>
        </ViewRouter>
        <ButtonContainer id='button-screen' type='SCREEN' />
      </div>
      <div className='strap strap-bottom' />
    </div>
  );
};

Watch.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Watch;
