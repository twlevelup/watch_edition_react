export const ACTION_TYPES = {
  BUTTON_REMAP: 'BUTTON_REMAP',
};

export const remapButtons = (buttons) => {
  return {
    type: ACTION_TYPES.BUTTON_REMAP,
    remapedButtons: buttons,
  };
};
