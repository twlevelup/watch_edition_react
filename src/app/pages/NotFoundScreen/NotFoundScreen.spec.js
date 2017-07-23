import React from 'react';
import { shallow } from 'enzyme';
import NotFoundScreen from './NotFoundScreen';

describe('NotFoundScreen component', () => {
  const componentWrapper = shallow(
    <NotFoundScreen />
  );

  test('it should has some text telling you made a bad decision', () => {
    expect(componentWrapper.find('#not-found-page').text()).toContain('Oh Noes!');
  });
});

