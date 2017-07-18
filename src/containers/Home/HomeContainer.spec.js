import React from 'react';
import {mount} from 'enzyme';
import HomeContainer from './HomeContainer.jsx';

describe('HomeContainer', () => {
  const homeContainerWrapper = mount(
    <HomeContainer> </HomeContainer>
  );

  test('it should display the Watch component', () => {
    const result = homeContainerWrapper.find('#watch-container');
    expect(result.exists()).toBeTruthy();
  });

});

