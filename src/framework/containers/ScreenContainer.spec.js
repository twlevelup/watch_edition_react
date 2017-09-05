import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import ScreenContainer from './ScreenContainer';

import * as buttonSelector from './selectors/buttonActionSelector';

const state = { ButtonActionsReducer: { SCREEN: jest.fn() } };
const store = configureMockStore()(state);

describe('ButtonContainer', () => {
  let curriedFunction;
  beforeEach(() => {
    curriedFunction = jest.fn();
    buttonSelector.getActionByType = jest.fn(() => curriedFunction);
  });
  it('should set the onClick action for the screen layout', () => {
    shallow(
      <ScreenContainer store={ store }>
        Hello
      </ScreenContainer>
    );
    expect(buttonSelector.getActionByType).toHaveBeenCalledWith('SCREEN');
    expect(curriedFunction).toHaveBeenCalledWith(store.getState());
  });
});
