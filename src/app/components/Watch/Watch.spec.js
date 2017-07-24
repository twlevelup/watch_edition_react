import React from 'react';
import {shallow,} from 'enzyme';
import Watch from './Watch.jsx';
import ScreenLayout from "../../../framework/components/ScreenLayout/ScreenLayout";

describe('Watch component', () => {
  let WatchComponent;
  const dummyNotificationEvent = {displayNotification: true, text: 'test'};
  beforeEach(() => {
    WatchComponent = shallow(
      <Watch notificationEvent={dummyNotificationEvent}/>
    );
  });


  test('it should display the straps', () => {
    const result = WatchComponent.find('.strap');
    expect(result).toBePresent();
    expect(result.length).toBe(2);
  });

  test('it should display the watch case', () => {
    expect(WatchComponent.find('.case')).toBePresent();
  });

  test('it should have four buttons', () => {
    expect(WatchComponent.find('Button')).toHaveLength(4);
  });

  test('it should have a ViewRouter component', () => {
    expect(WatchComponent.find('ViewRouter')).toBePresent();
  });

  test('it should pass the notificationEvent props to the NotificationPopup component', () => {
    const result = WatchComponent.find('NotificationPopup');
    expect(result.props().show).toBe(dummyNotificationEvent.displayNotification);
    expect(result.props().text).toBe(dummyNotificationEvent.text);
  });

  test('it should trigger event handler when button is been clicked', () => {
    let result = WatchComponent.find('#button-right');
    expect(result).toBePresent();

    WatchComponent.instance().eventHandlers.RIGHT = jest.fn();

    result.simulate('click');
    expect(WatchComponent.instance().eventHandlers.RIGHT).toBeCalled();
  });

  test('it should trigger event handler when right button is been clicked', () => {
    let result = WatchComponent.find('#button-right');
    expect(result).toBePresent();

    WatchComponent.instance().eventHandlers.RIGHT = jest.fn();

    result.simulate('click');
    expect(WatchComponent.instance().eventHandlers.RIGHT).toBeCalled();
  });

  test('it should trigger event handler when left button is been clicked', () => {
    let result = WatchComponent.find('#button-left');
    expect(result).toBePresent();

    WatchComponent.instance().eventHandlers.LEFT = jest.fn();

    result.simulate('click');
    expect(WatchComponent.instance().eventHandlers.LEFT).toBeCalled();
  });

  test('it should trigger event handler when top button is been clicked', () => {
    let result = WatchComponent.find('#button-top');
    expect(result).toBePresent();

    WatchComponent.instance().eventHandlers.TOP = jest.fn();

    result.simulate('click');
    expect(WatchComponent.instance().eventHandlers.TOP).toBeCalled();
  });

  test('it should trigger event handler when bottom button is been clicked', () => {
    let result = WatchComponent.find('#button-bottom');
    expect(result).toBePresent();

    WatchComponent.instance().eventHandlers.BOTTOM = jest.fn();

    result.simulate('click');
    expect(WatchComponent.instance().eventHandlers.BOTTOM).toBeCalled();
  });

  test('it should contain screen layout component', () => {
    let result = WatchComponent.find('ScreenLayout');
    expect(result).toHaveProp('handlerMapper', WatchComponent.instance().mapEventHandler);
  });

});

