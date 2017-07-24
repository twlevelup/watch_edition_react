import React from 'react';
import PropTypes from 'prop-types';

import GenericList from '../../../framework/components/GenericList/GenericList';
import './contact_list.css';

export default class ContactListScreen extends React.Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  render() {
    return (
      <div id='contact-screen' className='contact-screen'>
        <h1 className='title'>Contacts </h1>
        <GenericList className='contacts-list' items={ this.props.contacts } />
      </div>
    );
  }
}
