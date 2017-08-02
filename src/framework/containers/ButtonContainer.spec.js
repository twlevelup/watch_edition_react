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

  beforeEach(() => {
    buttonWrapper = mount(
      <Provider store={ store }>
        <ButtonContainer id={ wrapperId } type={ wrapperType } />
      </Provider>
    );
  });

  it('should carry the props to the child button component', () => {
    expect(buttonWrapper.find('Button')).toHaveProp('id', wrapperId);
    expect(buttonWrapper.find('Button')).toHaveProp('type', wrapperType);
  });

  it('should connect Button component with Redux', () => {
    expect(buttonWrapper.find('Button').props().onClick).toEqual(state.ButtonActionsReducer.TOP);
  });

  xit('it should dispatch remap action onClick');
});

