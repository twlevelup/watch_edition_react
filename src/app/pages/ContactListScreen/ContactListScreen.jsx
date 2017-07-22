import React from 'react';
import GenericList from "../../../framework/components/GenericList/GenericList";
import PropTypes from 'prop-types';

export default class ContactListScreen extends React.Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  render() {
    return (
      <div id='contact-screen'>
        <h1 className="title">Contacts </h1>
        <GenericList class='contacts' items={this.props.contacts}/>
      </div>
    );
  }
}
