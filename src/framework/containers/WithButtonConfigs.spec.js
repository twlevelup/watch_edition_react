import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import WithButtonConfigs from './WithButtonConfigs';
import { ACTION_TYPES } from '../actions/ButtonAction';

const state = {};
const store = configureMockStore()(state);

describe('WithButtonConfigs', () => {
  const mockedComponent = () => {
    return (
      <div>
        Mocked!
      </div>
    );
  };
  const buttonMappings = { TOP: jest.fn() };
  let buttonWrapper;
  let ConnectedComponent;

  beforeEach(() => {
    jest.spyOn(store, 'dispatch');
    ConnectedComponent = WithButtonConfigs(mockedComponent, buttonMappings);
    buttonWrapper = mount(
      <Provider store={ store }>
        <ConnectedComponent someProp />
      </Provider>
    );
  });

  it('should wrap the original component and preserve its properties', () => {
    const actualComponent = buttonWrapper.find('mockedComponent');
    expect(actualComponent).toBePresent();
    expect(actualComponent).toHaveProp('someProp');
  });


  it('should dispatch BUTTON_REMAP action once component is mounted', () => {
    const expectedDispatchAction = {
      type: ACTION_TYPES.BUTTON_REMAP,
      remapedButtons: buttonMappings,
    };
    expect(store.dispatch).toHaveBeenCalledWith(expectedDispatchAction);
  });

  it('should call the buttonMappings as a function if it is a isFunction', () => {
    const buttonMappingFunction = jest.fn();
    buttonMappingFunction.mockReturnValue(buttonMappings);
    ConnectedComponent = WithButtonConfigs(mockedComponent, buttonMappingFunction);
    buttonWrapper = mount(
      <Provider store={ store }>
        <ConnectedComponent someProp />
      </Provider>
    );

    const expectedDispatchAction = {
      type: ACTION_TYPES.BUTTON_REMAP,
      remapedButtons: buttonMappings,
    };
    expect(buttonMappingFunction).toHaveBeenCalledWith({ someProp: true });
    expect(store.dispatch).toHaveBeenCalledWith(expectedDispatchAction);
  });

  it('should assign any values in the components location object to props', () => {
    const fakeNav = {
      router: {
        location: {
          state: {
            testProp: 'test',
          },
        },
      },
    };
    const navStore = configureMockStore()(fakeNav);

    const navigatedComponent = mount(
      <Provider store={ navStore }>
        <ConnectedComponent someProp />
      </Provider>
    );

    expect(navigatedComponent.find('mockedComponent').props().testProp).toBe('test');
  });
});
