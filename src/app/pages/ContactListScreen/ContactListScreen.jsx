import React, { Component } from 'react';
import {
  string,
  arrayOf,
  func,
  number,
  shape,
} from 'prop-types';

import GenericList from '../../../framework/components/GenericList/GenericList';
import WithButtonConfigs from '../../../framework/containers/WithButtonConfigs';
import ButtonAction from '../../../framework/util/ButtonAction';
import Contact from './components/Contact/Contact';
import './contact_list.css';

export class ContactListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedContactIndex: props.selectedContactIndex };
  }

  componentDidMount() {
    this.props.remapButtons(this.buttonActions);
  }

  componentDidUpdate() {
    this.props.remapButtons(this.buttonActions);
  }

  selectNextContact() {
    if (this.state.selectedContactIndex < this.props.contacts.length - 1) {
      this.setState({ selectedContactIndex: ++this.state.selectedContactIndex });
    }
  }

  selectPreviousContact() {
    if (this.state.selectedContactIndex > 0) {
      this.setState({ selectedContactIndex: --this.state.selectedContactIndex });
    }
  }

  buttonActions = {
    RIGHT: () => ButtonAction.goToPage('/counter'),
    LEFT: () => ButtonAction.goToPage('/'),
    BOTTOM: () => { ButtonAction.scrollDown(); this.selectNextContact(); },
    TOP: () => { ButtonAction.scrollUp(); this.selectPreviousContact(); },
    SCREEN: () => ButtonAction.goToPage(`/contact/${ this.state.selectedContactIndex }`),
  };

  render() {
    return (
      <div id='contact-screen' className='contact-screen'>
        <h1 className='title'>Contacts</h1>
        <GenericList
          className='contacts-list'
          items={ this.props.contacts }
          selectedItemIndex={ this.state.selectedContactIndex }
          listItem={ Contact }
        />
      </div>
    );
  }
}

ContactListComponent.propTypes = {
  selectedContactIndex: number.isRequired,
  remapButtons: func.isRequired,
  contacts: arrayOf(shape({
    name: string,
    phone: string,
    address: string,
  })).isRequired,
};

ContactListComponent.defaultProps = {
  selectedContactIndex: 0,
};


export default WithButtonConfigs(ContactListComponent);
