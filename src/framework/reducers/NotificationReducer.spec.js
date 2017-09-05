import reducer from './NotificationReducer';
import { ACTION_TYPES } from '../actions/NotificationAction';

describe('NotificationReducer', () => {
  it('should return the initial state', () => {
    const result = reducer(undefined, {});
    expect(result).toMatchObject({ text: 'default text', show: false });
  });

  describe('When called with PUSH_NOTIFICATION action ', () => {
    it('should override the existing notification with the new one and set show to true', () => {
      const notification = 'text text';
      const result = reducer(undefined, { type: ACTION_TYPES.PUSH_NOTIFICATION, notification });
      expect(result).toMatchObject({ text: 'text text', show: true });
    });
  });

  describe('When called with HIDE_NOTIFICATION action ', () => {
    it('should set show to false', () => {
      const result = reducer({ text: 'text text', show: true }, { type: ACTION_TYPES.HIDE_NOTIFICATION });
      expect(result).toMatchObject({ text: 'text text', show: false });
    });
  });
});
