import React from 'react';
import {mount} from 'enzyme';
import NotFoundScreen from './NotFoundScreen';

describe('NotFoundScreen component', () => {
  const componentWrapper = mount(
    <NotFoundScreen />
  );

  test('it should has some text telling you made a bad decision', () => {
    expect(componentWrapper.find('#not-found-page').text()).toContain('Oh Noes!');
  });

});

