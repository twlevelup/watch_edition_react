import React from 'react';
import { shallow } from 'enzyme';
import Watch from './Watch.jsx';
import history from '../../../framework/Router/BrowserHistory';
import ScreenLayout from '../ScreenLayout/ScreenLayout';

jest.mock('../../../framework/Router/BrowserHistory');
history.push = jest.fn();

describe('Watch component', () => {
  let WatchComponent;
  const dummyNotificationEvent = { displayNotification: true, text: 'test' };
  beforeEach(() => {
    WatchComponent = shallow(
      <Watch notificationEvent={ dummyNotificationEvent } />);
  });

  const verifyClickingButtonEvent = (result, resultPath) => {
    expect(result).toBePresent();
    result.simulate('click');
    expect(history.push).toBeCalledWith(resultPath);
  };


  test('it should display the straps', () => {
    const result = WatchComponent.find('.strap');
    expect(result).toBePresent();
    expect(result.length).toBe(2);
  });

  test('it should display the watch case', () => {
    expect(WatchComponent.find('.case')).toBePresent();
  });

  test('it should have four buttons', () => {
    expect(WatchComponent.find('Button')).toHaveLength(4);
  });

  test('it should have a ViewRouter component', () => {
    expect(WatchComponent.find('ViewRouter')).toBePresent();
  });

  test('it should pass the notificationEvent props to the NotificationPopup component', () => {
    const result = WatchComponent.find('NotificationPopup');
    expect(result.props().show).toBe(dummyNotificationEvent.displayNotification);
    expect(result.props().text).toBe(dummyNotificationEvent.text);
  });

  test('it should trigger event handler when right button is been clicked', () => {
    verifyClickingButtonEvent(WatchComponent.find('#button-right'), '/notfound');
  });

  test('it should trigger event handler when left button is been clicked', () => {
    verifyClickingButtonEvent(WatchComponent.find('#button-left'), '/notfound');
  });

  test('it should trigger event handler when top button is been clicked', () => {
    verifyClickingButtonEvent(WatchComponent.find('#button-top'), '/notfound');
  });

  test('it should trigger event handler when bottom button is been clicked', () => {
    verifyClickingButtonEvent(WatchComponent.find('#button-bottom'), '/notfound');
  });

  test('it should contain screen layout component', () => {
    const result = WatchComponent.find('ScreenLayout');
    expect(result).toHaveLength(1);
  });

  test('it should update event handlers', () => {
    const mockFunc = () => {
      jest.fn();
    };
    const newEventHandlers =
      {
        LEFT: mockFunc,
        RIGHT: mockFunc,
        BOTTOM: mockFunc,
        TOP: mockFunc,
      };
    expect(WatchComponent.instance().eventHandlers).not.toEqual(newEventHandlers);

    WatchComponent.find(ScreenLayout).prop('handlerMapper')(newEventHandlers);

    expect(WatchComponent.instance().eventHandlers).toEqual(newEventHandlers);
  });
});
