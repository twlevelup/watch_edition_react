import React from 'react';
import { shallow } from 'enzyme';
import { NotificationPopupComp } from './NotificationPopup';

describe('NotificationPopup component', () => {
  const remapButtons = jest.fn();
  const hideNotification = jest.fn();
  const getMock = (props) => {
    remapButtons.mockClear();
    hideNotification.mockClear();

    return shallow(<NotificationPopupComp { ...props } />);
  };

  describe('When rendered with [show] property set to false', () => {
    it('should be hidden', () => {
      const props = { show: false, text: 'hidden' };
      const wrapper = getMock(props);
      expect(wrapper.find('.notification-popup')).toHaveClassName('hidden');
    });
  });

  describe('When rendered with [show] property set to true', () => {
    const props = { show: true, text: 'not hidden' };
    let wrapper;
    beforeEach(() => {
      wrapper = getMock(props);
    });

    it('should be visible', () => {
      expect(wrapper.find('.notification-popup')).not.toHaveClassName('hidden');
    });

    it('should display the [text] property', () => {
      expect(wrapper.find('.notification-popup')).toHaveText(props.text);
    });
  });
});
