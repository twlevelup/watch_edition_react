import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import NotificationContainer from './NotificationContainer';

const state = {
  NotificationReducer: {
    text: 'text',
    show: false,
  },
};
const store = configureMockStore()(state);
const mockedComponent = () => {
  return (
    <div>
        Mocked!
    </div>
  );
};
const ConnectedPopup = NotificationContainer(mockedComponent);

describe('NotificationFormContainer', () => {
  let wrapper;
  const setStore = (newStore) => {
    return mount(
      <Provider store={ newStore }>
        <ConnectedPopup />
      </Provider>
    );
  };

  beforeEach(() => {
    jest.spyOn(store, 'dispatch');
    wrapper = setStore(store);
  });

  it('should define a remapButtons prop', () => {
    expect(wrapper.find('mockedComponent').props().remapButtons).toBeDefined();
  });

  it('should dispatch a remapButtons action when the remapButtons prop is called', () => {
    wrapper.find('mockedComponent').props().remapButtons({ some: 'thing' });
    expect(store.dispatch).toHaveBeenCalledWith({ type: 'BUTTON_REMAP', remapedButtons: { some: 'thing' } });
  });

  it('should define a hideNotification prop', () => {
    expect(wrapper.find('mockedComponent').props().hideNotification).toBeDefined();
  });

  it('should dispatch a hideNotification action when the hideNotification prop is called', () => {
    wrapper.find('mockedComponent').props().hideNotification();
    expect(store.dispatch).toHaveBeenCalledWith({ type: 'HIDE_NOTIFICATION' });
  });

  it('should define a pushNotification prop', () => {
    expect(wrapper.find('mockedComponent').props().hideNotification).toBeDefined();
  });

  it('should dispatch a pushNotification action when the pushNotification prop is called', () => {
    wrapper.find('mockedComponent').props().pushNotification('new text');
    expect(store.dispatch).toHaveBeenCalledWith({ type: 'PUSH_NOTIFICATION', notification: 'new text' });
  });

  it('should dispatch a remapButtons action with  when the remapButtons prop is called', () => {
    wrapper.find('mockedComponent').props().remapButtons({ some: 'thing' });
    expect(store.dispatch).toHaveBeenCalledWith({ type: 'BUTTON_REMAP', remapedButtons: { some: 'thing' } });
  });

  it('should have a text prop matching the Redux state', () => {
    expect(wrapper.find('mockedComponent').props().text).toBe(state.NotificationReducer.text);
  });

  it('should have a show prop matching the Redux state', () => {
    expect(wrapper.find('mockedComponent').props().show).toBe(state.NotificationReducer.show);
  });

  it('should set text and state to the defaults when the state is empty', () => {
    const emptyStore = configureMockStore()({});
    const emptyWrapper = setStore(emptyStore);
    expect(emptyWrapper.find('mockedComponent').props()).toMatchObject({ text: 'default text', show: false });
  });
});
