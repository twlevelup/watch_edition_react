import React from 'react';
import { shallow } from 'enzyme';
import ButtonAction from '../../../framework/util/ButtonAction';
import { ContactViewScreenComponent as ContactViewScreen, ContactViewScreenButtons } from './ContactViewScreen';

jest.mock('../../../framework/util/ButtonAction');

describe('ContactViewScreen ', () => {
  let componentWrapper;
  const mockContact = { name: 'MeMeMEEE' };

  beforeEach(() => {
    componentWrapper = shallow(
      <ContactViewScreen contact={ mockContact } />
    );
  });

  it('should have a header', () => {
    expect(componentWrapper.find('h2')).toBePresent();
  });

  it('should display the required contact based on the url path', () => {
    expect(componentWrapper.find('.name')).toHaveText('Name: MeMeMEEE');
  });

  test('it should have a LEFT button config of going to Counter Page with an initial number value of 5', () => {
    ContactViewScreenButtons.LEFT();
    expect(ButtonAction.goToPage).toHaveBeenCalledWith({ pathname: '/counter', state: { number: 5 } });
  });

  test('it should have a RIGHT button config of going to contactList page', () => {
    ContactViewScreenButtons.RIGHT();
    expect(ButtonAction.goToPage).toHaveBeenCalledWith('/contacts');
  });

  test('it should have a TOP button config of scrolling page up', () => {
    ContactViewScreenButtons.TOP();
    expect(ButtonAction.scrollUp).toHaveBeenCalled();
  });

  test('it should have a BOTTOM button config of scrolling page down', () => {
    ContactViewScreenButtons.BOTTOM();
    expect(ButtonAction.scrollDown).toHaveBeenCalled();
  });
});
