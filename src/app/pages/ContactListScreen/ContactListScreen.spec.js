import React from 'react';
import { shallow } from 'enzyme';
import { ContactListComponent, buttonActions } from './ContactListScreen';
import ButtonAction from '../../../framework/util/ButtonAction';

jest.mock('../../../framework/util/ButtonAction');

describe('ContactListScreen component', () => {
  let defaultProps;
  beforeEach(() => {
    jest.resetAllMocks();

    defaultProps = {
      contacts: [{ name: 'contact 1' }, { name: 'contact 2' }, { name: 'contact 3' }],
      selectedIndex: 0,
    };
  });

  it('should have a title', () => {
    const componentWrapper = shallow(<ContactListComponent { ...defaultProps } />);
    expect(componentWrapper.find('.title')).toBePresent();
  });

  it('should contain a ScrollList component', () => {
    const componentWrapper = shallow(<ContactListComponent { ...defaultProps } />);
    expect(componentWrapper.find('ScrollList')).toBePresent();
  });

  describe('button actions', () => {
    it('should have a LEFT button config of going to Home Page', () => {
      buttonActions(defaultProps).LEFT();
      expect(ButtonAction.goToPage).toHaveBeenCalledWith('/');
    });

    it('should have a RIGHT button config of going to COUNTER', () => {
      buttonActions(defaultProps).RIGHT();
      expect(ButtonAction.goToPage).toHaveBeenCalledWith('/counter');
    });

    it('should have on SCREEN button config of going to contact view page with the selected contact', () => {
      buttonActions({ ...defaultProps, selectedIndex: 1 }).SCREEN();

      expect(ButtonAction.goToPage).toHaveBeenCalledWith({
        pathname: '/contact-view',
        state: { contact: { name: 'contact 2' } },
      });
    });

    describe('TOP button', () => {
      it('should set previous contact', () => {
        buttonActions({ ...defaultProps, selectedIndex: 2 }).TOP();

        expect(ButtonAction.goToPage).toHaveBeenCalledWith({
          state: { selectedIndex: 1 },
        });
      });
      it('should roll back to the bottom', () => {
        buttonActions({ ...defaultProps, selectedIndex: 0 }).TOP();

        expect(ButtonAction.goToPage).toHaveBeenCalledWith({
          state: { selectedIndex: 2 },
        });
      });
    });

    describe('BOTTOM button', () => {
      it('should set previous contact', () => {
        buttonActions({ ...defaultProps, selectedIndex: 0 }).BOTTOM();

        expect(ButtonAction.goToPage).toHaveBeenCalledWith({
          state: { selectedIndex: 1 },
        });
      });

      it('should roll back to the top', () => {
        buttonActions({ ...defaultProps, selectedIndex: 2 }).BOTTOM();

        expect(ButtonAction.goToPage).toHaveBeenCalledWith({
          state: { selectedIndex: 0 },
        });
      });

      it('should default the selectedIndex to 0', () => {
        buttonActions({ contacts: defaultProps.contacts }).BOTTOM();

        expect(ButtonAction.goToPage).toHaveBeenCalledWith({
          state: { selectedIndex: 1 },
        });
      });
    });
  });
});
