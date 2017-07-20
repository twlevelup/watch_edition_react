import React from 'react';
import { mount } from 'enzyme';
import DateTimeDisplay from './DateTimeDisplay';
import moment from 'moment';

describe('DateTimeDisplay component', () => {
  const dateTimeWrapper = mount(
    <DateTimeDisplay />
  );

  test('it should display the current time formatted as {HH:mm:ss}', () => {
    const result = dateTimeWrapper.find('.clock-time');
    let currentHourAndMinutes = moment().format('HH:mm:ss');
    expect(result.text()).toContain(currentHourAndMinutes);
  });

  test('it should display the current date as {ddd MMMM DD YYYY}', () => {
    const result = dateTimeWrapper.find('.clock-date');
    let expectedDate = moment().format('ddd MMMM DD YYYY');
    expect(result.text()).toContain(expectedDate);
  });
});

