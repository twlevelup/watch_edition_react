import React from 'react';
import ContactList from '../../components/ContactList/ContactList';

export default class ContactsScreen extends React.Component {

  render() {
    return (
      <div id='contact-screen'>
        <h1>Contacts </h1>
        <ContactList contacts={this.props.contacts}/>
      </div>
    );
  }
}
