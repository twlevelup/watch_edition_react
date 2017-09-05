import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import ScreenContainer from './ScreenContainer';

import * as buttonSelector from './selectors/buttonActionSelector';

const state = { ButtonActionsReducer: { SCREEN: jest.fn() } };
const store = configureMockStore()(state);

describe('ButtonContainer', () => {
  beforeEach(() => {
    buttonSelector.getActionByType = jest.fn(() => () => {});
  });
  it('should set the onClick action for the screen layout', () => {
    shallow(
      <ScreenContainer store={ store }>
        Hello
      </ScreenContainer>
    );
    expect(buttonSelector.getActionByType).toHaveBeenCalledWith('SCREEN', state);
  });
});
