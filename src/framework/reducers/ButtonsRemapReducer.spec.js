import reducer from './ButtonsRemapReducer';
import ButtonAction from '../util/ButtonAction';
import { ACTION_TYPES } from '../actions/ButtonAction';


jest.mock('../util/ButtonAction');

describe('ButtonsRemapReducer', () => {
  beforeEach(() => {
    ButtonAction.scrollDown = jest.fn();
    ButtonAction.scrollUp = jest.fn();
  });

  it('should return the initial state', () => {
    const result = reducer(undefined, {});
    expect(Object.keys(result)).toContain('TOP', 'BOTTOM', 'LEFT', 'RIGHT');
    expect(result.TOP());
    expect(result.BOTTOM());
    expect(result.LEFT());
    expect(result.RIGHT());
  });

  describe('When called with BUTTON_REMAP action ', () => {
    it('should override the existing button mapping state with the new one', () => {
      const mockState = { LEFT: 'wut?' };
      const remapedButtons = { LEFT: jest.fn(), RIGHT: jest.fn() };
      const result = reducer(mockState, { type: ACTION_TYPES.BUTTON_REMAP, remapedButtons });
      expect(result.LEFT).toBe(remapedButtons.LEFT);
      expect(result.RIGHT).toBe(remapedButtons.RIGHT);
    });
  });
});
