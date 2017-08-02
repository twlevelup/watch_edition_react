import { ACTION_TYPES } from '../actions/ButtonAction';

const NoOp = () => {};

const initialState = {
  BOTTOM: NoOp,
  TOP: NoOp,
  RIGHT: NoOp,
  LEFT: NoOp,
};


const ButtonActionReducer = (state = initialState, action) => {
  switch (action.type) {
  case ACTION_TYPES.BUTTON_REMAP:
    return { ...state, ...action.remapedButtons };
  default:
    return initialState;
  }
};

export default ButtonActionReducer;
