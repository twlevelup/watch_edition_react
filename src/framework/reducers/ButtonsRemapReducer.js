import { ACTION_TYPES } from '../actions/ButtonAction';

const initialState = {
  BOTTOM: () => {},
  TOP: () => {},
  RIGHT: () => {},
  LEFT: () => {},
};


const ButtonActionReducer = (state = initialState, action) => {
  switch (action.type) {
  case ACTION_TYPES.BUTTON_REMAP:
    return Object.assign({}, state, action.remapedButtons);
  default:
    return initialState;
  }
};

export default ButtonActionReducer;
