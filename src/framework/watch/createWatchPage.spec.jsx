import React from 'react';
import { shallow } from 'enzyme';

import WatchWrapper from './WatchWrapper';
import createWatchPage from './createWatchPage';

const DummyComponent = () => (<h1>Hello</h1>);

describe('WatchPage HigherOrderComponent', () => {
  let actions;
  beforeEach(() => {
    actions = {
      left: jest.fn(),
      right: jest.fn(),
      top: jest.fn(),
      bottom: jest.fn(),
    };
  });

  it('should render the component passed', () => {
    const Page = createWatchPage(actions)(DummyComponent);
    const wrapper = shallow(<Page />);

    expect(wrapper).toContainReact(<DummyComponent />);
  });

  it('should pass props on to the sub comonent', () => {
    const Page = createWatchPage(actions)(DummyComponent);
    const wrapper = shallow(<Page someProp='Some Value' />);

    expect(wrapper.find(DummyComponent)).toHaveProp('someProp', 'Some Value');
  });

  it('should render the WatchWrapper', () => {
    const Page = createWatchPage(actions)(DummyComponent);
    const wrapper = shallow(<Page />);

    expect(wrapper.find(WatchWrapper)).toBePresent();
  });

  it('should bind the actions to the watchWrapper', () => {
    const Page = createWatchPage(actions, {})(DummyComponent);
    const wrapper = shallow(<Page />);

    const watchWrapper = wrapper.find(WatchWrapper);

    expect(watchWrapper).toHaveProp('actions', actions);
  });
});
