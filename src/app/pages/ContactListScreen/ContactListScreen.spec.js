import React from 'react';
import { shallow } from 'enzyme';
import ContactListScreen from './ContactListScreen';

describe('ContactListScreen component', () => {
  const defaultProps = {
    contacts: [],
  };
  const composeComponent = (props = {}) => shallow(
    <ContactListScreen { ...defaultProps } { ...props } />
  );

  test('it should have a title', () => {
    expect(composeComponent().find('.title')).toBePresent();
  });

  test('it should have class[contact-screen]', () => {
    expect(composeComponent()).toHaveClassName('contact-screen');
  });

  test('it should contain a GenericList component', () => {
    expect(composeComponent().find('GenericList')).toBePresent();
  });
});
