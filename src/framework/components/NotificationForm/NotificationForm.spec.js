import React from 'react';
import { shallow } from 'enzyme';
import { NotificationFormComponent } from './NotificationForm';

describe('NotificationForm', () => {
  let defaultProps;
  let componentWrapper;
  beforeEach(() => {
    defaultProps = {
      text: 'A notification',
      pushNotification: jest.fn(),
      hideNotification: jest.fn(),
      remapButtons: jest.fn(),
    };
    componentWrapper = shallow(<NotificationFormComponent { ...defaultProps } />);
  });

  test('it should have an text input area', () => {
    expect(componentWrapper.find('.notification-input')).toBePresent();
  });

  test('it should have a submit notification button', () => {
    expect(componentWrapper.find('.submit-btn')).toBePresent();
  });

  describe('buttonConfigs.OVERRIDE', () => {
    it('calls hideNotifictionAction', () => {
      componentWrapper.instance().buttonConfigs.OVERRIDE();
      expect(defaultProps.hideNotification).toHaveBeenCalled();
    });

    it('calls remapButtons with OVERRIDE: false', () => {
      componentWrapper.instance().buttonConfigs.OVERRIDE();
      expect(defaultProps.remapButtons).toHaveBeenCalledWith({ OVERRIDE: false });
    });
  });

  describe('When notification text is changed', () => {
    test('it should save new text in the component\'s state ', () => {
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
      componentWrapper.find('#notification-form').simulate('submit', submissionEvent);
    };

    test('it should pass the current textarea value to to the callback function', () => {
      composeFormAndSimulateSubmission();
      expect(defaultProps.pushNotification).toBeCalledWith(defaultProps.text);
    });

    test('it should not refresh the page', () => {
      composeFormAndSimulateSubmission();
      expect(submissionEvent.preventDefault).toHaveBeenCalled();
    });
  });
});
