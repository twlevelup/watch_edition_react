import React from 'react';
import { shallow } from 'enzyme';
import HomePage from './HomePage.jsx';

describe('HomePage', () => {
  const homeContainerWrapper = shallow(
    <HomePage />
  );

  test('it should display the Watch component', () => {
    expect(homeContainerWrapper.find('Watch')).toBePresent();
  });

  test('it should display the LevelUp title', () => {
    const result = homeContainerWrapper.find('h1');
    expect(result.text()).toBe('LevelUp Watch Edition');
  });

  test('it should display the NotifierForm', () => {
    expect(homeContainerWrapper.find('NotificationForm')).toBePresent();
  });
});

