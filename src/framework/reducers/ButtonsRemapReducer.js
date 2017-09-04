import { ACTION_TYPES } from '../actions/ButtonAction';
import ButtonAction from '../util/ButtonAction';

const { doNothing } = ButtonAction;

const initialState = {
  BOTTOM: doNothing,
  TOP: doNothing,
  RIGHT: doNothing,
  LEFT: doNothing,
  OVERRIDE: false,
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
