import React from 'react';
import { mount, shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import WatchApp from './WatchApp';

const DummyComponent = () => <div>Hello World</div>;
const OtherDummy = () => <div>Hello World</div>;
const state = {
  ButtonActionsReducer: {
    TOP: jest.fn(),
    BOTTOM: jest.fn(),
    LEFT: jest.fn(),
    RIGHT: jest.fn(),
    SCREEN: jest.fn(),
    OVERRIDE: false,
  },
  NotificationReducer: {
    text: 'default',
    show: false,
  },
};
const pages = [
  { path: '/', Component: DummyComponent },
  { path: '/other', Component: OtherDummy, props: { some: 'prop' } },
];
const store = configureMockStore()(state);
const setStore = (newStore) => {
  return mount(
    <Provider store={ newStore }>
      <WatchApp pages={ pages } />
    </Provider>
  );
};
describe('WatchApp', () => {
  let wrappedApp;
  let shallowApp;
  beforeEach(() => {
    wrappedApp = setStore(store);
    shallowApp = shallow(<WatchApp pages={ pages } />);
  });

  test('it should display the Watch component', () => {
    expect(wrappedApp.find('Watch')).toBePresent();
  });

  test('it should display the LevelUp title', () => {
    const result = wrappedApp.find('h1');
    expect(result).toHaveText('LevelUp Watch Edition');
  });

  test('it should display the NotificationForm', () => {
    expect(wrappedApp.find('NotificationForm')).toBeDefined();
  });

  describe('Page Components', () => {
    it('should display the DummyComponent screen', () => {
      expect(shallowApp.find(DummyComponent)).toBePresent();
    });

    it('should attach the path prop', () => {
      expect(shallowApp.find(DummyComponent).props()).toMatchObject({ path: '/' });
    });

    it('should attach the other props when given', () => {
      expect(shallowApp.find(OtherDummy).props()).toMatchObject({ path: '/other', some: 'prop' });
    });
  });
});
