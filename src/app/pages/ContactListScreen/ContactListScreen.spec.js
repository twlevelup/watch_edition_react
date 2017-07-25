import React from 'react';
import { shallow } from 'enzyme';
import ContactListScreen from './ContactListScreen';

describe('ContactListScreen component', () => {
  const componentWrapper = shallow(
    <ContactListScreen pageState={ { contacts: [] } } />
  );

  test('it should have a title', () => {
    expect(componentWrapper.find('.title')).toBePresent();
  });

  test('it should have class[contact-screen]', () => {
    expect(componentWrapper).toHaveClassName('contact-screen');
  });

  test('it should contain a GenericList component', () => {
    expect(componentWrapper.find('GenericList')).toBePresent();
  });
});
