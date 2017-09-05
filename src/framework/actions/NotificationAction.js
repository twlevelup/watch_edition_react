export const ACTION_TYPES = {
  PUSH_NOTIFICATION: 'PUSH_NOTIFICATION',
  HIDE_NOTIFICATION: 'HIDE_NOTIFICATION',
};

export const pushNotification = (notification) => {
  return {
    type: ACTION_TYPES.PUSH_NOTIFICATION,
    notification,
  };
};

export const hideNotification = () => {
  return {
    type: ACTION_TYPES.HIDE_NOTIFICATION,
  };
};
