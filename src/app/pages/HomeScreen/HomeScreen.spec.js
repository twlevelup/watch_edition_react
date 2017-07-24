import React from 'react';
import { shallow } from 'enzyme';
import HomeScreen from './HomeScreen';
import Date from '../../../framework/components/Date/Date';
import Time from '../../../framework/components/Time/Time';

describe('HomeScreen component', () => {
  test('it should have Date component', () => {
    expect(shallow(<HomeScreen />)).toContainReact(<Time />);
  });

  test('it should have Time component', () => {
    expect(shallow(<HomeScreen />)).toContainReact(<Date />);
  });

  test('it should have some content', () => {
    expect(shallow(<HomeScreen />).find('#home-page-content')).toBePresent();
  });

  describe('When rendered with handlerMapper ', () => {
    let buttonHandlerMapper;
    let buttonActions;
    beforeEach(() => {
      buttonHandlerMapper = jest.fn();
      const wrapper = shallow(<HomeScreen handlerMapper={ buttonHandlerMapper } />);
      buttonActions = wrapper.instance().buttonActions;
    });

    test('it should override the LEFT button', () => {
      expect(buttonHandlerMapper).toHaveBeenCalledWith({ 'LEFT': buttonActions.LEFT, 'RIGHT': buttonActions.RIGHT });
    });

    test('it should override the RIGHT button', () => {
      expect(buttonHandlerMapper).toHaveBeenCalledWith({ 'LEFT': buttonActions.LEFT, 'RIGHT': buttonActions.RIGHT });
    });
  });
});
