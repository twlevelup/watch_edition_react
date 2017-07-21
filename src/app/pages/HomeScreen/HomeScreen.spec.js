import React from 'react';
import {mount} from 'enzyme';
import HomeScreen from './HomeScreen';

describe('HomeScreen component', () => {
  const componentWrapper = mount(
    <HomeScreen />
  );

  test('it should have DateTimeDisplay component', () => {
    expect(componentWrapper.find('#date-display').exists()).toBeTruthy();
    expect(componentWrapper.find('#time-display').exists()).toBeTruthy();
  });

  test('it should have some content', () => {
    expect(componentWrapper.find('#home-page-content').exists()).toBeTruthy();
  });

});

