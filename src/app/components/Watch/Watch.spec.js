import React from 'react';
import {mount} from 'enzyme';
import Watch from './Watch.jsx';

describe('Watch component', () => {
  const WatchComponent = mount(
    <Watch />
  );

  test('it should display the straps', () => {
    const result = WatchComponent.find('.strap');
    expect(result.exists()).toBeTruthy();
    expect(result.length).toBe(2);
  });

  test('it should display the watch case', () => {
    const result = WatchComponent.find('.case');
    expect(result.exists()).toBeTruthy();
  });

  test('it should have four buttons', () => {
    const result = WatchComponent.find('button');
    expect(result).toHaveLength(4);
  });
});

