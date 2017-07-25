import React from 'react';
import { shallow } from 'enzyme';

import WatchPage from '../components/WatchPage/WatchPage';
import createWatchPage from './createWatchPage';

const DummyComponent = () => (<h1>Hello</h1>);

describe('WatchPage HigherOrderComponent', () => {
  let mockFunctions;
  let actions;
  beforeEach(() => {
    mockFunctions = {
      left: jest.fn(),
      right: jest.fn(),
      top: jest.fn(),
      bottom: jest.fn(),
    };
    actions = {
      left: pageState => () => mockFunctions.left(pageState),
      right: pageState => () => mockFunctions.right(pageState),
      top: pageState => () => mockFunctions.top(pageState),
      bottom: pageState => () => mockFunctions.bottom(pageState),
    };
  });

  const shallowRenderPageWrapper = wrapper => (wrapper.shallow());

  it('should render the component passed', () => {
    const Page = createWatchPage(actions)(DummyComponent);
    const wrapper = shallow(<Page />);

    expect(shallowRenderPageWrapper(wrapper).find(DummyComponent)).toBePresent();
  });

  it('should pass props on to the sub comonent', () => {
    const Page = createWatchPage(actions)(DummyComponent);
    const wrapper = shallow(<Page someProp='Some Value' />);

    expect(shallowRenderPageWrapper(wrapper).find(DummyComponent)).toHaveProp('someProp', 'Some Value');
  });


  it('should initialise the state of Component', () => {
    const initalState = { some: 'state' };
    const Page = createWatchPage(actions, initalState)(DummyComponent);
    const wrapper = shallow(<Page />);

    expect(shallowRenderPageWrapper(wrapper).find(DummyComponent)).toHaveProp('some', initalState.some);
  });

  it('should pass any changes of state to the page', () => {
    const initalState = { some: 'state' };
    const Page = createWatchPage(actions, initalState)(DummyComponent);
    const wrapper = shallow(<Page />);

    const newState = { some: 'new state' };

    const pageWrapper = shallowRenderPageWrapper(wrapper).setState({ pageState: newState });

    expect(pageWrapper.find(DummyComponent)).toHaveProp('some', newState.some);
  });

  it('should render the WatchPage', () => {
    const Page = createWatchPage(actions)(DummyComponent);
    const wrapper = shallow(<Page />);

    expect(shallowRenderPageWrapper(wrapper).find(WatchPage)).toBePresent();
  });

  describe('actions', () => {
    it('should bind the actions to the WatchPage', () => {
      const pageState = { some: 'state' };
      const Page = createWatchPage(actions, pageState)(DummyComponent);
      const wrapper = shallow(<Page />);

      const boundActions = shallowRenderPageWrapper(wrapper)
        .find(WatchPage).props().actions;

      boundActions.left();
      expect(mockFunctions.left).toHaveBeenCalledWith(pageState);

      boundActions.right();
      expect(mockFunctions.right).toHaveBeenCalledWith(pageState);

      boundActions.top();
      expect(mockFunctions.top).toHaveBeenCalledWith(pageState);

      boundActions.bottom();
      expect(mockFunctions.bottom).toHaveBeenCalledWith(pageState);
    });

    it('should bind a function that updates state', () => {
      const pageState = { some: 'state' };

      const left = (_, updatePageState) => () => mockFunctions.left(updatePageState);
      const Page = createWatchPage({ ...actions, left }, pageState)(DummyComponent);
      const wrapper = shallow(<Page />);

      const pageWrapper = shallowRenderPageWrapper(wrapper);
      const boundActions = pageWrapper.find(WatchPage).props().actions;

      const newState = { some: 'new State' };
      boundActions.left();
      mockFunctions.left.mock.calls[0][0](newState);

      expect(pageWrapper.find(DummyComponent).props()).toEqual(newState);
    });

    it('should bind the props that are passed to the parent component', () => {
      const left = (...args) => () => mockFunctions.left(args[2]);
      const Page = createWatchPage({ ...actions, left }, {})(DummyComponent);
      const wrapper = shallow(<Page someProp='Some Value' />);
      const pageWrapper = shallowRenderPageWrapper(wrapper);

      const boundActions = pageWrapper.find(WatchPage).props().actions;
      boundActions.left();

      expect(mockFunctions.left).toHaveBeenCalledWith({ someProp: 'Some Value' });
    });
  });
});
