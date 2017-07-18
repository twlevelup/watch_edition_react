import React from 'react';
import './contacts_list.scss';

export default class ContactList extends React.Component {
  render() {

    let contactItem = (contact, index) => {
      return (
        <li key={ index }>
          <span>
            Name: {contact.name}
          </span>
          <br />
          <span>
            Phone: {contact.phone}
          </span>
        </li>);
    };

    let contacts = this.props.contacts.map(contactItem);

    return (
      <div id='contact-list'>
        <h1>Contacts </h1>
        <ul className='contacts-container'>{contacts}</ul>
      </div>
    );
  }
}

