import React from 'react';
import {shallow} from 'enzyme';
import ContactListScreen from './ContactListScreen';

describe('ContactListScreen component', () => {
  const componentWrapper = shallow(
    <ContactListScreen />
  );

  test('it should have a title', () => {
    expect(componentWrapper.find('.title').text()).toContain('Contacts');
  });

  test('it should display a list of contacts using GenericList component', () => {
    expect(componentWrapper.find('GenericList').exists()).toBeTruthy();
  });

});

