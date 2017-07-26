import React from 'react';
import { shallow } from 'enzyme';
import Contact from './Contact';

describe('Contact', () => {
  const defaultProps = {
    name: 'Ash Ketchum',
    phone: '???',
    address: 'Pallet Town',
  };

  const composeComponent = (props = {}) =>
    shallow(<Contact { ...defaultProps } { ...props } />);

  test('It displays name, phone, and address', () => {
    const contacts = [
      { name: 'Brock Harrison', phone: '???', address: 'Pewter City' },
      { name: 'Misty', phone: '???', address: 'Cerulean City' },
    ];
    contacts.forEach((contact) => {
      const component = composeComponent(contact);
      expect(component.find('.name').text()).toEqual(`Name: ${ contact.name }`);
      expect(component.find('.phone').text()).toEqual(`Phone: ${ contact.phone }`);
      expect(component.find('.address').text()).toEqual(`Address: ${ contact.address }`);
    });
  });

  test('it should have className "contact"', () => {
    expect(composeComponent()).toHaveClassName('contact');
  });
});
