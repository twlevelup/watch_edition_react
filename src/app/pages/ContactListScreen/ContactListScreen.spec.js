import React from 'react';
import { shallow } from 'enzyme';
import { ButtonAction } from 'watch-framework-react';
import { ContactListScreen, ContactScreenButtons } from './ContactListScreen';

jest.mock(ButtonAction);

describe('ContactListScreen component', () => {
  let componentWrapper;
  beforeEach(() => {
    jest.spyOn(ButtonAction, 'goToPage');
    componentWrapper = shallow(
      <ContactListScreen contacts={ [] } />
    );
  });

  it('should have a title', () => {
    expect(componentWrapper.find('.title')).toBePresent();
  });

  it('should have class[contact-screen]', () => {
    expect(componentWrapper).toHaveClassName('contact-screen');
  });

  it('should contain a GenericList component', () => {
    expect(componentWrapper.find('GenericList')).toBePresent();
  });

  it('should have a LEFT button config of going to Home Page', () => {
    ContactScreenButtons.LEFT();
    expect(ButtonAction.goToPage).toHaveBeenCalledWith('/');
  });

  it('should have a RIGHT button config of going to Counter page', () => {
    ContactScreenButtons.RIGHT();
    expect(ButtonAction.goToPage).toHaveBeenCalledWith('/counter');
  });

  it('should have a TOP button config of scrolling up', () => {
    ContactScreenButtons.TOP();
    expect(ButtonAction.scrollUp).toHaveBeenCalled();
  });

  it('should have a BOTTOM button config of scrolling down', () => {
    ContactScreenButtons.BOTTOM();
    expect(ButtonAction.goToPage).toHaveBeenCalled();
  });
});
