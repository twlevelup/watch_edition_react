import React from 'react';
import {
  string,
  arrayOf,
  shape,
} from 'prop-types';

import GenericList from '../../../framework/components/GenericList/GenericList';
import WithButtonConfigs from '../../../framework/containers/WithButtonConfigs';
import ButtonAction from '../../../framework/util/ButtonAction';
import Contact from './components/Contact/Contact';
import './contact_list.css';

export const ContactListScreen = ({ contacts }) => {
  return (
    <div id='contact-screen' className='contact-screen'>
      <h1 className='title'>Contacts</h1>
      <GenericList
        className='contacts-list'
        items={ contacts }
        listItem={ Contact }
      />
    </div>
  );
};

ContactListScreen.propTypes = {
  contacts: arrayOf(shape({
    name: string,
    phone: string,
    address: string,
  })).isRequired,
};

export const ContactScreenButtons = {
  LEFT: () => ButtonAction.goToPage('/'),
  RIGHT: () => ButtonAction.goToPage('/counter'),
};

export default WithButtonConfigs(ContactListScreen, ContactScreenButtons);
