import React from 'react';
import { shallow } from 'enzyme';
import HomePage from './HomePage';

describe('HomePage', () => {
  test('it should display the Watch component', () => {
    expect(shallow(<HomePage />).find('Watch')).toBePresent();
  });

  test('it should display the LevelUp title', () => {
    const result = shallow(<HomePage />).find('h1');
    expect(result).toHaveText('LevelUp Watch Edition');
  });

  describe('When rendered with NotificationForm as a child component', () => {
    test('it should display the NotificationForm', () => {
      expect(shallow(<HomePage />).find('NotificationForm')).toBePresent();
    });

    test('it should have an event handler that updates the components state', () => {
      const wrapper = shallow(<HomePage />);
      const dummyNotificationEvent = { text: 'wowow', displayNotification: true };
      wrapper.instance().notificationHandler(dummyNotificationEvent);
      expect(wrapper).toHaveState('notificationEvent', dummyNotificationEvent);
    });

    test('it should have the event handler set to default state if no new event is passed', () => {
      const wrapper = shallow(<HomePage />);
      const dummyNotificationEvent = { text: 'wowow', displayNotification: true };
      wrapper.setState({ notificationEvent: dummyNotificationEvent });
      wrapper.instance().notificationHandler();
      expect(wrapper).toHaveState('notificationEvent', dummyNotificationEvent);
    });

    test('it should pass the defaultText prop to NotificationForm', () => {
      const componentWrapper = shallow(<HomePage />);
      const dummyState = { notificationEvent: { text: 'testText' } };
      componentWrapper.setState(dummyState);
      expect(componentWrapper.find('NotificationForm')).toHaveProp('defaultText', dummyState.notificationEvent.text);
    });

    test('it should pass notificationEvent callback handler to NotificationForm', () => {
      const componentWrapper = shallow(<HomePage />);
      expect(componentWrapper.find('NotificationForm'))
        .toHaveProp('handleEvent', componentWrapper.instance().notificationHandler);
    });

    test('it should default state for the notification event', () => {
      const notificationEvent = {
        text: 'Default notification text',
        displayNotification: false,
      };
      expect(shallow(<HomePage />)).toHaveState('notificationEvent', notificationEvent);
    });
  });
});

