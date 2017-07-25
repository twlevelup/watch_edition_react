import React from 'react';
import { shallow } from 'enzyme';
import HomeScreen from './HomeScreen';
import Date from '../../../framework/components/Date/Date';
import Time from '../../../framework/components/Time/Time';
import history from '../../../framework/Router/BrowserHistory';

jest.mock('../../../framework/Router/BrowserHistory');

describe('HomeScreen component', () => {
  beforeEach(() => {
    history.push = jest.fn();
  });
  test('it should have Date component', () => {
    expect(shallow(<HomeScreen />)).toContainReact(<Time />);
  });

  test('it should have Time component', () => {
    expect(shallow(<HomeScreen />)).toContainReact(<Date />);
  });

  test('it should have some content', () => {
    expect(shallow(<HomeScreen />).find('#home-page-content')).toBePresent();
  });

  test('it should have a LEFT button config of going to Counter Page', () => {
    const wrapper = shallow(<HomeScreen />);
    wrapper.instance().buttonActions.LEFT();
    expect(history.push).toHaveBeenCalledWith('/counter');
  });

  test('it should have a RIGHT button config of going to contactList page', () => {
    const wrapper = shallow(<HomeScreen />);
    wrapper.instance().buttonActions.RIGHT();
    expect(history.push).toHaveBeenCalledWith('/contacts');
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
