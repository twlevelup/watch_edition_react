import React from 'react';
import {mount} from 'enzyme';
import HomeContainer from './HomePage.jsx';

describe('HomeContainer', () => {
  const homeContainerWrapper = mount(
    <HomeContainer />
  );

  test('it should display the Watch component', () => {
    const result = homeContainerWrapper.find('#watch-container');
    expect(result.exists()).toBeTruthy();
  });

  test('it should display the LevelUp title', () => {
    const result = homeContainerWrapper.find('h1');
    expect(result.text()).toBe('LevelUp Watch Edition');
  });
});

