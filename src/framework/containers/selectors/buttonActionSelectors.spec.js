import { getActionByType } from './buttonActionSelector';

describe('buttonActionSelectors', () => {
  describe('getActionbyType', () => {
    it('it should return the action by the type specified', () => {
      const state = {
        ButtonActionsReducer: {
          TOP: 'top function',
        },
      };

      expect(getActionByType('TOP', state)).toBe('top function');
    });

    it('it should return the override function if it\'s present', () => {
      const state = {
        ButtonActionsReducer: {
          TOP: 'top function',
          OVERRIDE: 'override function',
        },
      };

      expect(getActionByType('TOP', state)).toBe('override function');
    });
  });
});
