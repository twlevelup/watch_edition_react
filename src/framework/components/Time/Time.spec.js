import React from 'react';
import { mount } from 'enzyme';
import Time from './Time';
import moment from 'moment';

describe('DateTimeDisplay component', () => {
  const TimeWrapper = mount(
    <Time />
  );

  test('it should display the current time formatted as {HH:mm:ss}', () => {
    const result = TimeWrapper.find('.clock-time');
    let currentHourAndMinutes = moment().format('HH:mm:ss');
    expect(result.text()).toContain(currentHourAndMinutes);
  });
});

