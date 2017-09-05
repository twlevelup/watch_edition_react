import { ACTION_TYPES } from '../actions/NotificationAction';

const initialState = {
  text: 'default text',
  show: false,
};

const reducers = {
  [ACTION_TYPES.PUSH_NOTIFICATION]: (state, action) => {
    return { ...state, text: action.notification, show: true };
  },
  [ACTION_TYPES.HIDE_NOTIFICATION]: (state) => {
    return { ...state, show: false };
  },
};

const NotificationReducer = (state = initialState, action) => {
  if (reducers[action.type]) {
    return reducers[action.type](state, action);
  }
  return state;
};

export default NotificationReducer;
