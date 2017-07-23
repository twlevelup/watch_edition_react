import React from 'react';
import { shallow } from 'enzyme';
import Watch from './Watch.jsx';

describe('Watch component', () => {
  const dummyNotificationEvent = { displayNotification: true, text: 'test' };
  const WatchComponent = shallow(
    <Watch notificationEvent={ dummyNotificationEvent } />
  );

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
});

