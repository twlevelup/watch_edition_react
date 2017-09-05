import { ACTION_TYPES, pushNotification, hideNotification } from './NotificationAction';

describe('pushNotification', () => {
  it('should create an action to push a new notification to the screen', () => {
    const notification = 'hello there';
    const expectedAction = {
      type: ACTION_TYPES.PUSH_NOTIFICATION,
      notification,
    };
    expect(pushNotification(notification)).toEqual(expectedAction);
  });
});

describe('hideNotification', () => {
  it('should create an action to hide the current notification popup', () => {
    const expectedAction = {
      type: ACTION_TYPES.HIDE_NOTIFICATION,
    };
    expect(hideNotification()).toEqual(expectedAction);
  });
});
