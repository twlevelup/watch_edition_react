import React from 'react';
import { shallow } from 'enzyme';
import NotificationPopup from './NotificationPopup';

describe('NotificationPopup component', () => {
  const composeComponent = ({ shown, text }) =>
    shallow(<NotificationPopup show={ shown } text={ text } />);

  describe('When rendered with [show] property set to false', () => {
    test('it should be hidden', () => {
      expect(composeComponent({ shown: false }).find('.notification-popup.hidden').exists()).toBeTruthy();
    });
  });

  describe('When rendered with [show] property set to true', () => {
    test('it should be visible', () => {
      expect(composeComponent({ shown: true }).find('.notification-popup').hasClass('hidden')).toBeFalsy();
    });

    test('it should display the [text] property', () => {
      const props = { shown: true, text: 'show me something' };
      expect(composeComponent(props).find('.notification-popup').text()).toContain(props.text);
    });

    xtest('it have a close button', () => {
    });

    xtest('it should an acknowledgment button', () => {
    });
  });
});
