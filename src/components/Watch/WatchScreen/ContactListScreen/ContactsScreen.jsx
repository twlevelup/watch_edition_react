import React from 'react';
import ContactList from '../../ContactList/ContactList';

export default function ContactListScreen(contacts) {
  return (
    <div id='contact-screen'>
      <h1>Contacts </h1>
      <ContactList contacts={contacts}/>
    </div>
  );
}
