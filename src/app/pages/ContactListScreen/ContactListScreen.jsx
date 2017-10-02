import React, { Component } from 'react';
import {
  string,
  arrayOf,
  func,
  number,
  shape,
} from 'prop-types';

import ScrollList from '../../../framework/components/ScrollList/ScrollList';
import WithButtonConfigs from '../../../framework/containers/WithButtonConfigs';
import ButtonAction from '../../../framework/util/ButtonAction';
import './contact_list.css';

export class ContactListComponent extends Component {
  componentDidMount() {
    this.props.remapButtons(this.buttonActions);
  }

  componentDidUpdate() {
    this.props.remapButtons(this.buttonActions);
  }

  selectNextContact() {
    if (this.props.selectedIndex < this.props.contacts.length - 1) {
      ButtonAction.goToPage({ state: { selectedIndex: this.props.selectedIndex + 1 } });
    }
  }

  selectPreviousContact() {
    if (this.props.selectedIndex > 0) {
      ButtonAction.goToPage({ state: { selectedIndex: this.props.selectedIndex - 1 } });
    }
  }

  buttonActions = {
    RIGHT: () => ButtonAction.goToPage('/counter'),
    LEFT: () => ButtonAction.goToPage('/'),
    BOTTOM: () => { this.selectNextContact(); },
    TOP: () => { this.selectPreviousContact(); },
    SCREEN: () => ButtonAction.goToPage({
      pathname: '/contact-view',
      state: { contact: this.props.contacts[this.props.selectedIndex] },
    }),
  };

  render() {
    return (
      <div id='contact-screen' className='contact-screen'>
        <h1 className='title'>Contacts</h1>
        <ScrollList
          labels={ this.props.contacts.map(c => c.name) }
          selectedIndex={ this.props.selectedIndex }
        />
      </div>
    );
  }
}

ContactListComponent.propTypes = {
  selectedIndex: number,
  remapButtons: func.isRequired,
  contacts: arrayOf(shape({
    name: string,
    phone: string,
    address: string,
  })).isRequired,
};

ContactListComponent.defaultProps = {
  selectedIndex: 0,
};


export default WithButtonConfigs(ContactListComponent);
