import React from 'react';
import { mount } from 'enzyme';
import Date from './Date';
import moment from 'moment';

describe('DateTimeDisplay component', () => {
  const dateWrapper = mount(
    <Date/>
  );

  test('it should display the current date as {ddd MMMM DD YYYY}', () => {
    const result = dateWrapper.find('.clock-date');
    let expectedDate = moment().format('ddd MMMM DD YYYY');
    expect(result.text()).toContain(expectedDate);
  });
});

