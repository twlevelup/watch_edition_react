import React from 'react';
import { mount } from 'enzyme';
import { NotificationPopupComp } from './NotificationPopup';

describe('NotificationPopup component', () => {
  const remapButtons = jest.fn();
  const fakeButtons = jest.fn();
  const getMock = (props) => {
    remapButtons.mockClear();
    fakeButtons.mockClear();
    return mount(
      <NotificationPopupComp
        { ...props }
        remapButtons={ remapButtons }
        buttonConfigs={ { OVERRIDE: fakeButtons } }
      />);
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

    it('Should call remapButtons after mounting', () => {
      wrapper.mount();
      expect(remapButtons).toHaveBeenCalledWith({ OVERRIDE: fakeButtons });
    });

    it('should be visible', () => {
      expect(wrapper.find('.notification-popup')).not.toHaveClassName('hidden');
    });

    it('should display the [text] property', () => {
      expect(wrapper.find('.notification-popup')).toHaveText(props.text);
    });
  });

  describe('When updating props or state', () => {
    it('Calls showPopup when show changes from false to true', () => {
      const props = { show: false, text: 'text' };
      const wrapper = getMock(props);
      wrapper.instance().showPopup = jest.fn();
      wrapper.setState({ show: true });

      expect(wrapper.instance().showPopup).toHaveBeenCalled();
    });

    it('Calls hidePopup when show changes from false to true', () => {
      const props = { show: true, text: 'text' };
      const wrapper = getMock(props);
      wrapper.setState({ show: false });

      expect(remapButtons).toHaveBeenCalledWith({ OVERRIDE: false });
    });
  });
});
