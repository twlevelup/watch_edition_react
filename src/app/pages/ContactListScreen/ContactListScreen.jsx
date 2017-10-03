import React from 'react';
import {
  string,
  arrayOf,
  number,
  shape,
} from 'prop-types';

import ScrollList from '../../../framework/components/ScrollList/ScrollList';
import WithButtonConfigs from '../../../framework/containers/WithButtonConfigs';
import ButtonAction from '../../../framework/util/ButtonAction';
import './contact_list.css';

export const ContactListComponent = ({ contacts, selectedIndex }) => (
  <div id='contact-screen' className='contact-screen'>
    <h1 className='title'>Contacts</h1>
    <ScrollList
      labels={ contacts.map(c => c.name) }
      selectedIndex={ selectedIndex }
    />
  </div>
);

const getNextIndex = (indexChange, selectedIndex, contacts) => {
  const newIndex = selectedIndex + indexChange;
  return Math.abs((newIndex + contacts.length) % contacts.length);
};

export const buttonActions = ({ contacts, selectedIndex = 0 }) => ({
  RIGHT: () => ButtonAction.goToPage('/counter'),
  LEFT: () => ButtonAction.goToPage('/'),
  BOTTOM: () => {
    ButtonAction.goToPage({ state: { selectedIndex: getNextIndex(1, selectedIndex, contacts) } });
  },
  TOP: () => {
    ButtonAction.goToPage({ state: { selectedIndex: getNextIndex(-1, selectedIndex, contacts) } });
  },
  SCREEN: () => ButtonAction.goToPage({
    pathname: '/contact-view',
    state: { contact: contacts[selectedIndex] },
  }),
});

ContactListComponent.propTypes = {
  selectedIndex: number,
  contacts: arrayOf(shape({
    name: string,
  })).isRequired,
};

ContactListComponent.defaultProps = {
  selectedIndex: 0,
};


export default WithButtonConfigs(ContactListComponent, buttonActions);
