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
    expect(componentWrapper.find('.notification-input')).toBePresent();
  });

  test('it should have a submit notification button', () => {
    const componentWrapper = shallow(<NotificationForm { ...defaultProps } />);
    expect(componentWrapper.find('.submit-btn')).toBePresent();
  });

  describe('When notification text is changed', () => {
    test('it should save new text in the component\'s state ', () => {
      const componentWrapper = shallow(<NotificationForm { ...defaultProps } />);
      const newText = 'HelloWorld';
      componentWrapper.find('.notification-input').simulate('change', { target: { value: newText } });
      expect(componentWrapper.state().input).toBe(newText);
    });
  });

  describe('When send notification button is clicked', () => {
    const submissionEvent = {
      preventDefault: jest.fn(),
    };
    const composeFormAndSimulateSubmission = () => {
      const componentWrapper = shallow(<NotificationForm { ...defaultProps } />);
      componentWrapper.find('#notification-form').simulate('submit', submissionEvent);
    };

    test('it should pass the current textarea value to to the callback function', () => {
      composeFormAndSimulateSubmission();
      expect(defaultProps.handleEvent).toBeCalledWith({ displayNotification: true, text: defaultProps.defaultText });
    });

    test('it should pass displayNotification set to True to to the callback function', () => {
      composeFormAndSimulateSubmission();
      expect(defaultProps.handleEvent).toBeCalledWith({ displayNotification: true, text: defaultProps.defaultText });
    });

    test('it should not refresh the page', () => {
      composeFormAndSimulateSubmission();
      expect(submissionEvent.preventDefault).toHaveBeenCalled();
    });
  });
});

