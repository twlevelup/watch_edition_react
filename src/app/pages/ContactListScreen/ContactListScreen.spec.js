import React from 'react';
import {mount} from 'enzyme';
import ContactScreen from './ContactScreen';

describe('ContactListScreen component', () => {
  const componentWrapper = mount(
    <ContactScreen />
  );

  test('it should have a title', () => {
    expect(componentWrapper.find('.title').exists()).toBeTruthy();
  });

  test('it should contain a GenericList component', () => {
    expect(componentWrapper.find('GenericList').exists()).toBeTruthy();
  });

});
