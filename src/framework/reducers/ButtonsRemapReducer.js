import ButtonAction from '../util/ButtonAction';
import { ACTION_TYPES } from '../actions/ButtonAction';

const initialState = {
  BOTTOM: () => ButtonAction.scrollDown('.screen-layout'),
  TOP: () => ButtonAction.scrollUp('.screen-layout'),
};


const ButtonActionReducer = (state = initialState, action) => {
  switch (action.type) {
  case ACTION_TYPES.BUTTON_REMAP:
    return Object.assign({}, state, action.remapedButtons);
  default:
    return state;
  }
};

export default ButtonActionReducer;
