import React from 'react';
import { mount } from 'enzyme';
import { ContactListComponent as ContactListScreen } from './ContactListScreen';
import ButtonAction from '../../../framework/util/ButtonAction';

jest.mock('../../../framework/util/ButtonAction');

describe('ContactListScreen component', () => {
  let componentWrapper;
  let onLoadRemapButtons;
  beforeEach(() => {
    jest.resetAllMocks();
    onLoadRemapButtons = jest.fn();
    componentWrapper = mount(
      <ContactListScreen
        contacts={ [{ name: 'bleh' }, { name: 'bloh' }] }
        remapButtons={ onLoadRemapButtons }
      />
    );
  });

  it('should call onLoadRemapButtons on componentDidMount', () => {
    expect(onLoadRemapButtons).toHaveBeenCalled();
  });

  it('should have a title', () => {
    expect(componentWrapper.find('.title')).toBePresent();
  });

  it('should contain a GenericList component', () => {
    expect(componentWrapper.find('ScrollList')).toBePresent();
  });

  describe('getNextIndex', () => {
    describe('when the result is between 0 and contacts.length', () => {
      beforeEach(() => {
        componentWrapper = mount(
          <ContactListScreen
            contacts={ [{ name: 'bleh' }, { name: 'bloh' }, { name: 'blah' }] }
            remapButtons={ onLoadRemapButtons }
            selectedIndex={ 1 }
          />);
      });
      test('it returns the new index when increased by 1', () => {
        expect(componentWrapper.instance().getNextIndex(1)).toBe(2);
      });

      test('it returns the new index when decreased by 1', () => {
        expect(componentWrapper.instance().getNextIndex(-1)).toBe(0);
      });
    });
  });

  it('should have a LEFT button config of going to Home Page', () => {
    componentWrapper.instance().buttonActions.LEFT();
    expect(ButtonAction.goToPage).toHaveBeenCalledWith('/');
  });

  it('should have a RIGHT button config of going to Counter page', () => {
    componentWrapper.instance().buttonActions.RIGHT();
    expect(ButtonAction.goToPage).toHaveBeenCalledWith('/counter');
  });

  it('should have on SCREEN button config of going to contact view page with the selected contact', () => {
    componentWrapper = mount(
      <ContactListScreen
        contacts={ [{ name: 'bleh' }, { name: 'bloh' }] }
        remapButtons={ onLoadRemapButtons }
        selectedIndex={ 1 }
      />
    );

    componentWrapper.instance().buttonActions.SCREEN();

    expect(ButtonAction.goToPage).toHaveBeenCalledWith({
      pathname: '/contact-view',
      state: { contact: { name: 'bloh' } },
    });
  });

  describe('TOP button', () => {
    it('should set previous contact in state', () => {
      componentWrapper = mount(
        <ContactListScreen
          contacts={ [{ name: 'bleh' }, { name: 'bloh' }] }
          remapButtons={ onLoadRemapButtons }
          selectedIndex={ 1 }
        />
      );
      componentWrapper.instance().buttonActions.TOP();
      expect(ButtonAction.goToPage).toHaveBeenCalledWith({ state: { selectedIndex: 0 } });
    });

    it('should set the selected contact to the greatest possible index when index would be negative', () => {
      componentWrapper = mount(
        <ContactListScreen
          contacts={ [{ name: 'bleh' }, { name: 'bloh' }] }
          remapButtons={ onLoadRemapButtons }
          selectedIndex={ 0 }
        />
      );
      componentWrapper.instance().buttonActions.TOP();
      expect(ButtonAction.goToPage).toHaveBeenCalledWith({ state: { selectedIndex: 1 } });
    });
  });

  describe('BOTTOM button', () => {
    it('should set next contact in state', () => {
      componentWrapper = mount(
        <ContactListScreen
          contacts={ [{ name: 'bleh' }, { name: 'bloh' }] }
          remapButtons={ onLoadRemapButtons }
          selectedIndex={ 0 }
        />
      );
      componentWrapper.instance().buttonActions.BOTTOM();
      expect(ButtonAction.goToPage).toHaveBeenCalledWith({ state: { selectedIndex: 1 } });
    });

    it('should set selected contact index to 0 when it would be more than the contact list length', () => {
      componentWrapper = mount(
        <ContactListScreen
          contacts={ [{ name: 'bleh' }, { name: 'bloh' }] }
          remapButtons={ onLoadRemapButtons }
          selectedIndex={ 1 }
        />
      );

      componentWrapper.instance().buttonActions.BOTTOM();

      expect(ButtonAction.goToPage).toHaveBeenCalledWith({ state: { selectedIndex: 0 } });
    });
  });
});
