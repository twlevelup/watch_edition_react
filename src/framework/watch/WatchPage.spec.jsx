import React from 'react';
import { shallow } from 'enzyme';

import createWatchPage, { WatchWrapper } from './WatchPage';

const DummyComponent = () => (<h1>Hello</h1>);

describe('WatchPage HigherOrderComponent', () => {
  it('should render the component passed', () => {
    const Page = createWatchPage()(DummyComponent);
    const wrapper = shallow(<Page />);

    expect(wrapper).toContainReact(<DummyComponent />);
  });
  it('should pass props on to the sub comonent', () => {
    const Page = createWatchPage()(DummyComponent);
    const wrapper = shallow(<Page someProp='Some Value' />);

    expect(wrapper.find(DummyComponent)).toHaveProp('someProp', 'Some Value');
  });
  it('should render the WatchWrapper', () => {
    const Page = createWatchPage()(DummyComponent);
    const wrapper = shallow(<Page />);

    expect(wrapper.find(WatchWrapper)).toBePresent();
  });
});
