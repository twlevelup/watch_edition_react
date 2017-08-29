import React from 'react';
import { shallow } from 'enzyme';
import Watch from './Watch';
import ButtonAction from '../../../framework/util/ButtonAction';

jest.mock('../../../framework/util/ButtonAction');
ButtonAction.goToPage = jest.fn();
ButtonAction.scrollDown = jest.fn();
ButtonAction.scrollUp = jest.fn();

describe('Watch component', () => {
  let WatchComponent;
  const dummyNotificationEvent = { displayNotification: true, text: 'test' };
  beforeEach(() => {
    WatchComponent = shallow(
      <Watch notificationEvent={ dummyNotificationEvent }>
        <div>Mock</div>
      </Watch>);
  });

  afterEach(() => {
    ButtonAction.goToPage.mockClear();
    ButtonAction.scrollDown.mockClear();
    ButtonAction.scrollUp.mockClear();
  });

  test('it should display the straps', () => {
    const result = WatchComponent.find('.strap');
    expect(result).toBePresent();
    expect(result.length).toBe(2);
  });

  test('it should display the watch case', () => {
    expect(WatchComponent.find('.case')).toBePresent();
  });

  test('it should have four buttonContainers', () => {
    expect(WatchComponent.find('Connect(Button)')).toHaveLength(4);
  });

  test('it should have a ViewRouter component', () => {
    expect(WatchComponent.find('ViewRouter')).toBePresent();
  });

  xtest('it should pass the notificationEvent props to the NotificationPopup component', () => {
    const result = WatchComponent.find('NotificationPopup');
    expect(result.props().show).toBe(dummyNotificationEvent.displayNotification);
    expect(result.props().text).toBe(dummyNotificationEvent.text);
  });

  test('it should contain screen layout component', () => {
    const result = WatchComponent.find('ScreenLayout');
    expect(result).toHaveLength(1);
  });
});
