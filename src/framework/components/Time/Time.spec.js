import React from 'react';
import { mount } from 'enzyme';
import moment from 'moment';
import MockDate from 'mockdate';

import Time from './Time';

describe('DateTimeDisplay component', () => {
  beforeEach(() => {
    MockDate.set(moment());
  });

  afterEach(() => {
    MockDate.reset();
  });

  const TimeWrapper = mount(
    <Time />
  );

  describe('When rendered without a [format] property', () => {
    test('it should display the current time formatted as {HH:mm:ss}', () => {
      const result = TimeWrapper.find('.clock-time');
      const currentHourAndMinutes = moment().format('HH:mm:ss');
      expect(result.text()).toContain(currentHourAndMinutes);
    });
  });

  describe('When rendered with [format] property', () => {
    test('it should display the current time formatted as format property', () => {
      const result = mount(<Time format='HH-HH-mm-ss' />).find('.clock-time');
      const currentHourAndMinutes = moment().format('HH-HH-mm-ss');
      expect(result.text()).toContain(currentHourAndMinutes);
    });
  });
});
