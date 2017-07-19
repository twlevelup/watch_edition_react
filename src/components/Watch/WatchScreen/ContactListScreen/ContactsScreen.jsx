import React from 'react';
import ContactList from '../../ContactList/ContactList';

export default function ContactListScreen(contacts) {
  return (
    <ContactList contacts={contacts}/>
  );
}
