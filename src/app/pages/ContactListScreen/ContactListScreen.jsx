import React from 'react';
import PropTypes from 'prop-types';

import GenericList from '../../../framework/components/GenericList/GenericList';
import './contact_list.css';

const ContactListScreen = ({ contacts }) => {
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

export default ContactListScreen;
