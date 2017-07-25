import React from 'react';
import { shallow } from 'enzyme';
import NotificationPopup from './NotificationPopup';

describe('NotificationPopup component', () => {
  describe('When rendered with [show] property set to false', () => {
    it('it should be hidden', () => {
      const wrapper = shallow(<NotificationPopup show={ false } text='hidden' />);
      expect(wrapper.find('.notification-popup')).toHaveClassName('hidden');
    });
  });

  describe('When rendered with [show] property set to true', () => {
    test('it should be visible', () => {
      const wrapper = shallow(<NotificationPopup show text='not hidden' />);
      expect(wrapper.find('.notification-popup')).not.toHaveClassName('hidden');
    });

    test('it should display the [text] property', () => {
      const props = { show: true, text: 'show me something' };
      const wrapper = shallow(<NotificationPopup { ...props } />);
      expect(wrapper.find('.notification-popup')).toHaveText(props.text);
    });

    xtest('it have a close button', () => {
    });

    xtest('it should an acknowledgment button', () => {
    });
  });
});
