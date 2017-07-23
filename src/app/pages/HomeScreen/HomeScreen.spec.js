import React from 'react';
import { mount } from 'enzyme';
import HomeScreen from './HomeScreen';

describe('HomeScreen component', () => {
  const componentWrapper = mount(
    <HomeScreen />
  );

  test('it should have DateTimeDisplay component', () => {
    expect(componentWrapper.find('#date-display')).toBePresent();
    expect(componentWrapper.find('#time-display')).toBePresent();
  });

  test('it should have some content', () => {
    expect(componentWrapper.find('#home-page-content')).toBePresent();
  });
});

