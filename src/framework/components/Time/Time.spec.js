import React from 'react';
import { shallow } from 'enzyme';

import Time from './Time';

describe('Time component', () => {
  const composeComponent = props => shallow(
    <Time { ...props } />
  ).find('t');

  test('it should refresh the time every second', () => {
    expect(composeComponent().props().interval).toBe(1000);
  });

  describe('When rendered without a [format] property', () => {
    test('it should display the current time formatted as {HH:mm:ss}', () => {
      expect(composeComponent().props().format).toContain('HH:mm:ss');
    });
  });

  describe('When rendered with [format] property', () => {
    test('it should display the current time formatted as format property', () => {
      const expectedTimeFormat = 'HH-HH-mm-ss';
      const result = shallow(<Time format={ expectedTimeFormat } />).find('t');
      expect(result.props().format).toContain(expectedTimeFormat);
    });
  });
});
