import React from 'react';
import {mount} from 'enzyme';
import Time from './Time';
import moment from 'moment';

describe('DateTimeDisplay component', () => {
  const TimeWrapper = mount(
    <Time />
  );

  describe('When rendered without a [format] property', () => {
    test('it should display the current time formatted as {HH:mm:ss}', () => {
      const result = TimeWrapper.find('.clock-time');
      let currentHourAndMinutes = moment().format('HH:mm:ss');
      expect(result.text()).toContain(currentHourAndMinutes);
    });
  });

  describe('When rendered with [format] property', () => {
    test('it should display the current time formatted as format property', () => {
      const result = mount(<Time format="HH-HH-mm-ss"/>).find('.clock-time');
      let currentHourAndMinutes = moment().format('HH-HH-mm-ss');
      expect(result.text()).toContain(currentHourAndMinutes);
    });
  });
});

