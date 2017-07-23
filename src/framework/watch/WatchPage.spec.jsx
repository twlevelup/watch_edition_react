import React from 'react';
import { shallow } from 'enzyme';

import Watch from './WatchPage';
import Button from '../components/Button/Button';

describe('Watch component', () => {
  const dummyNotificationEvent = { displayNotification: true, text: 'test' };
  const ChildComponent = () => <h1>Hello</h1>;

  let watchWrapper;
  let actions;
  beforeEach(() => {
    actions = {
      left: jest.fn(),
      right: jest.fn(),
      top: jest.fn(),
      bottom: jest.fn(),
    };
    watchWrapper = shallow(<Watch actions={ actions } notificationEvent={ dummyNotificationEvent }>
      <ChildComponent />
    </Watch>);
  });

  test('it should display the straps', () => {
    const result = watchWrapper.find('.strap');
    expect(result.exists()).toBeTruthy();
    expect(result.length).toBe(2);
  });

  test('it should display the watch case', () => {
    expect(watchWrapper.find('.case').exists()).toBeTruthy();
  });

  test('it should have four buttons', () => {
    expect(watchWrapper.find('Button')).toHaveLength(4);
  });

  describe('button actions', () => {
    test('should call the left action when left is pushed', () => {
      const leftButton = watchWrapper.find(Button).find('#button-left');

      leftButton.prop('onClick')();

      expect(actions.left).toHaveBeenCalled();
    });
    test('should call the right action when right is pushed', () => {
      const rightButton = watchWrapper.find(Button).find('#button-right');

      rightButton.prop('onClick')();

      expect(actions.right).toHaveBeenCalled();
    });
    test('should call the bottom action when bottom is pushed', () => {
      const bottomButton = watchWrapper.find(Button).find('#button-bottom');

      bottomButton.prop('onClick')();

      expect(actions.bottom).toHaveBeenCalled();
    });
    test('should call the top action when top is pushed', () => {
      const topButton = watchWrapper.find(Button).find('#button-top');

      topButton.prop('onClick')();

      expect(actions.top).toHaveBeenCalled();
    });
  });


  xtest('it should have a ViewRouter component', () => {
    expect(watchWrapper.find('ViewRouter').exists()).toBeTruthy();
  });

  xtest('it should pass the notificationEvent props to the NotificationPopup component', () => {
    const result = watchWrapper.find('NotificationPopup');
    expect(result.props().show).toBe(dummyNotificationEvent.displayNotification);
    expect(result.props().text).toBe(dummyNotificationEvent.text);
  });
});

