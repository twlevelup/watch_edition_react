import React from 'react';
import { shallow } from 'enzyme';
import NotificationForm from './NotificationForm';

describe('NotificationForm', () => {
  const componentWrapper = shallow(
    <NotificationForm />
  );

  test('it should have an text input area', () => {
    expect(componentWrapper.find('.notification-input').exists()).toBeTruthy();
  });

  test('it should have a submit notification button', () => {
    expect(componentWrapper.find('.submit-btn').exists()).toBeTruthy();
  });
});

