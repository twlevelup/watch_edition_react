import React from 'react';
import { shallow } from 'enzyme';
import NotFoundScreen from './NotFoundScreen';

describe('NotFoundScreen component', () => {
  test('it should has some text telling you made a bad decision', () => {
    expect(shallow(<NotFoundScreen />).find('#not-found-page').text()).toContain('Oh Noes!');
  });
});

