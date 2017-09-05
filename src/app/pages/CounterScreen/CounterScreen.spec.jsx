import React from 'react';
import { mount } from 'enzyme';
import { CounterScreenComponent } from './CounterScreen';
import ButtonAction from '../../../framework/util/ButtonAction';

jest.mock('../../../framework/util/ButtonAction');

describe('<CounterScreenComponent />', () => {
  let componentWrapper;
  let onLoadRemapButtons;

  beforeEach(() => {
    onLoadRemapButtons = jest.fn();
    componentWrapper = mount(<CounterScreenComponent remapButtons={ onLoadRemapButtons } />);
    jest.spyOn(ButtonAction, 'goToPage');
  });

  it('should display zero by default', () => {
    expect(componentWrapper).toHaveText('0');
  });

  it('should call onLoadRemapButtons on componentDidMount', () => {
    expect(onLoadRemapButtons).toHaveBeenCalled();
  });

  it('it should have a TOP button config adding 1', () => {
    componentWrapper.instance().buttonActions.TOP();
    expect(componentWrapper).toHaveText('1');
  });

  it('it should have a BOTTOM button config subtract 1', () => {
    componentWrapper.instance().buttonActions.BOTTOM();
    expect(componentWrapper).toHaveText('-1');
  });

  it('it should have a RIGHT button going to the home page', () => {
    componentWrapper.instance().buttonActions.RIGHT();
    expect(ButtonAction.goToPage).toHaveBeenCalledWith('/');
  });

  it('it should have a SCREEN button config reseting to 0', () => {
    componentWrapper.instance().buttonActions.BOTTOM();
    componentWrapper.instance().buttonActions.BOTTOM();
    componentWrapper.instance().buttonActions.SCREEN();
    expect(componentWrapper).toHaveText('0');
  });
});
