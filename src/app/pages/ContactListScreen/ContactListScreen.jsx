import React from 'react';
import PropTypes from 'prop-types';

import GenericList from '../../../framework/components/GenericList/GenericList';
import WithButtonConfigs from '../../../framework/containers/WithButtonConfigs';
import ButtonAction from '../../../framework/util/ButtonAction';
import './contact_list.css';

export const ContactListScreen = ({ contacts }) => {
  return (
    <div id='contact-screen' className='contact-screen'>
      <h1 className='title'>Contacts </h1>
      <GenericList className='contacts-list' items={ contacts } />
    </div>
  );
};

ContactListScreen.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export const ContactScreenButtons = {
  LEFT: () => ButtonAction.goToPage('/'),
  RIGHT: () => ButtonAction.goToPage('/counter'),
};

export default WithButtonConfigs(ContactListScreen, ContactScreenButtons);
