import reducer from './ButtonsRemapReducer';
import ButtonAction from '../util/ButtonAction';
import { ACTION_TYPES } from '../actions/ButtonAction';

describe('ButtonsRemapReducer', () => {
  it('should return the initial state', () => {
    const result = reducer(undefined, {});

    expect(result).toMatchObject({ LEFT: ButtonAction.doNothing });
    expect(result).toMatchObject({ RIGHT: ButtonAction.doNothing });
    expect(result).toMatchObject({ TOP: ButtonAction.doNothing });
    expect(result).toMatchObject({ BOTTOM: ButtonAction.doNothing });
    expect(result).toMatchObject({ OVERRIDE: false });
  });

  describe('When called with BUTTON_REMAP action ', () => {
    it('should override the existing button mapping state with the new one', () => {
      const mockState = { LEFT: 'wut?' };
      const remapedButtons = { LEFT: jest.fn(), RIGHT: jest.fn(), OVERRDIE: jest.fn() };
      const result = reducer(mockState, { type: ACTION_TYPES.BUTTON_REMAP, remapedButtons });
      expect(result.LEFT).toBe(remapedButtons.LEFT);
      expect(result.RIGHT).toBe(remapedButtons.RIGHT);
      expect(result.OVERRIDE).toBe(remapedButtons.OVERRIDE);
    });
  });
});
