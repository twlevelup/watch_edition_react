import React from 'react';
import {mount} from 'enzyme';
import ContactScreen from './ContactScreen';

describe('ContactListScreen component', () => {
  const componentWrapper = mount(
    <ContactScreen />
  );

  test('it should have a title', () => {
    expect(componentWrapper.find('#date-time-display').exists()).toBeTruthy();
  });

  test('it should have some content', () => {
    expect(componentWrapper.find('#home-page-content').exists()).toBeTruthy();
  });

});

