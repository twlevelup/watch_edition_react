import React from 'react';
import { shallow } from 'enzyme';
import Watch from './Watch';

describe('Watch component', () => {
  let WatchComponent;
  const fakeFunc = jest.fn();
  const dummyNotificationEvent = {
    show: true,
    text: 'test',
    buttonConfigs: { OVERRIDE: fakeFunc },
  };
  beforeEach(() => {
    WatchComponent = shallow(
      <Watch notificationEvent={ dummyNotificationEvent }>
        <div>Mock</div>
      </Watch>);
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
    expect(result.props()).toMatchObject(dummyNotificationEvent);
  });

  test('it should contain screen layout component', () => {
    const result = WatchComponent.find('ScreenLayout');
    expect(result).toHaveLength(1);
  });
});
