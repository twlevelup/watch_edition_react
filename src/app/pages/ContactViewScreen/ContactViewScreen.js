import React from 'react';
import {
  string,
  arrayOf,
  number,
  shape,
} from 'prop-types';
import { withRouter } from 'react-router';
import ButtonAction from '../../../framework/util/ButtonAction';
import WithButtonConfigs from '../../../framework/containers/WithButtonConfigs';

export const ContactViewScreenComponent = ({ contacts, match }) => {
  const selectedContact = contacts[match.params.selectedContactIndex];
  return (
    <div className='contact'>
      <h2> Yay here is your contact </h2>
      <div className='name'>
        <b>Name</b>: {selectedContact.name}
      </div>
    </div>
  );
};

ContactViewScreenComponent.propTypes = {
  match: shape({ params: shape({ selectedContactIndex: number.isRequired }) }).isRequired,
  contacts: arrayOf(shape({
    name: string,
    phone: string,
    address: string,
  })).isRequired,
};

export const ContactViewScreenButtons = {
  LEFT: () => ButtonAction.goToPage({ pathname: '/counter', state: { number: 5 } }),
  RIGHT: () => ButtonAction.goToPage('/contacts'),
  TOP: () => ButtonAction.scrollUp(),
  BOTTOM: () => ButtonAction.scrollDown(),
};

export default withRouter(WithButtonConfigs(ContactViewScreenComponent, ContactViewScreenButtons));
