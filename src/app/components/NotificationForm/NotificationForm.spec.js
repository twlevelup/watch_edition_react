import React from 'react';
import { shallow } from 'enzyme';
import NotificationForm from './NotificationForm';

describe('NotificationForm', () => {
  let defaultProps;
  beforeEach(() => {
    defaultProps = {
      defaultText: 'A notification',
      handleEvent: jest.fn(),
    };
  });

  test('it should have an text input area', () => {
    const componentWrapper = shallow(<NotificationForm { ...defaultProps } />);
    expect(componentWrapper.find('.notification-input').exists()).toBeTruthy();
  });

  test('it should have a submit notification button', () => {
    const componentWrapper = shallow(<NotificationForm { ...defaultProps } />);
    expect(componentWrapper.find('.submit-btn').exists()).toBeTruthy();
  });
});

