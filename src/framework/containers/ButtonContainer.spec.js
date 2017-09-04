import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import ButtonContainer from './ButtonContainer';

const state = { ButtonActionsReducer: { TOP: jest.fn() } };
const store = configureMockStore()(state);

describe('ButtonContainer', () => {
  const wrapperId = 'testID';
  const wrapperType = 'TOP';

  let buttonWrapper;

  const setStore = (newStore) => {
    return mount(
      <Provider store={ newStore }>
        <ButtonContainer id={ wrapperId } type={ wrapperType } />
      </Provider>
    );
  };

  beforeEach(() => {
    buttonWrapper = setStore(store);
  });

  it('should carry the props to the child button component', () => {
    expect(buttonWrapper.find('Button')).toHaveProp('id', wrapperId);
    expect(buttonWrapper.find('Button')).toHaveProp('type', wrapperType);
  });

  it('should connect Button component with Redux', () => {
    expect(buttonWrapper.find('Button').props().onClick).toEqual(state.ButtonActionsReducer.TOP);
  });

  it('should set all buttons to the OVERRIDE function when given', () => {
    const testFunc = jest.fn();
    const newStore = configureMockStore()({ ButtonActionsReducer: { OVERRIDE: testFunc } });
    const overrideWrapper = setStore(newStore);

    expect(overrideWrapper.find('Button').props().onClick).toBe(testFunc);
  });
});
