import React from 'react';
import { mount } from 'enzyme';
import moment from 'moment';

import Date from './Date';

describe('DateTimeDisplay component', () => {
  const dateWrapper = mount(
    <Date />
  );

  describe('When rendered without a [format] property', () => {
    test('it should display the current date as {ddd MMMM DD YYYY} by default', () => {
      const result = dateWrapper.find('.clock-date');
      const expectedDate = moment().format('ddd MMMM DD YYYY');
      expect(result.text()).toContain(expectedDate);
    });
  });

  describe('When rendered with a [format] property', () => {
    test('it should display the current date as the format property given', () => {
      const result = mount(<Date format='MMM-DD-YY' />).find('.clock-date');
      const expectedDate = moment().format('MMM-DD-YY');
      expect(result.text()).toContain(expectedDate);
    });
  });
});

