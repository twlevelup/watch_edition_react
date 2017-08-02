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

  beforeEach(() => {
    jest.spyOn(store, 'dispatch');
    const ConnectedComponent = WithButtonConfigs(mockedComponent, buttonMappings);
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
});

