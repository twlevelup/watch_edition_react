import { ACTION_TYPES, remapButtons } from './ButtonAction';

describe('remapButtons', () => {
  it('should create an action to remap buttons', () => {
    const buttonPayload = { LEFT: () => 'lol' };
    const expectedAction = {
      type: ACTION_TYPES.BUTTON_REMAP,
      remapedButtons: buttonPayload,
    };
    expect(remapButtons(buttonPayload)).toEqual(expectedAction);
  });
});
