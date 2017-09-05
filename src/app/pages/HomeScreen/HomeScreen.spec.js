import React from 'react';
import { shallow } from 'enzyme';
import { Date, Time, ButtonAction } from 'watch-framework-react';
import { HomeScreenComponent, HomeScreenButtons } from './HomeScreen';

jest.mock(ButtonAction);

describe('HomeScreenComponent component', () => {
  let homeScreenComponent;
  beforeEach(() => {
    jest.spyOn(ButtonAction, 'goToPage', 'scrollUp', 'scrollDown');
    homeScreenComponent = shallow(<HomeScreenComponent />);
  });
  test('it should have Date component', () => {
    expect(homeScreenComponent).toContainReact(<Time />);
  });

  test('it should have Time component', () => {
    expect(homeScreenComponent).toContainReact(<Date />);
  });

  test('it should have some content', () => {
    expect(homeScreenComponent.find('#home-page-content')).toBePresent();
  });

  test('it should have a LEFT button config of going to Counter Page with an initial number value of 5', () => {
    HomeScreenButtons.LEFT();
    expect(ButtonAction.goToPage).toHaveBeenCalledWith({ pathname: '/counter', state: { number: 5 } });
  });

  test('it should have a RIGHT button config of going to contactList page', () => {
    HomeScreenButtons.RIGHT();
    expect(ButtonAction.goToPage).toHaveBeenCalledWith('/contacts');
  });

  test('it should have a TOP button config of scrolling page up', () => {
    HomeScreenButtons.TOP();
    expect(ButtonAction.scrollUp).toHaveBeenCalled();
  });

  test('it should have a BOTTOM button config of scrolling page down', () => {
    HomeScreenButtons.BOTTOM();
    expect(ButtonAction.scrollDown).toHaveBeenCalled();
  });
});
