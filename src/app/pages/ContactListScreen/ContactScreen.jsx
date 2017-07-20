import React from 'react';
import GenericList from "../../../framework/components/GenericList/GenericList";

export default class ContactsScreen extends React.Component {

  render() {
    return (
      <div id='contact-screen'>
        <h1 className="title">Contacts </h1>
        <GenericList class='contacts' items={this.props.contacts}/>
      </div>
    );
  }
}
