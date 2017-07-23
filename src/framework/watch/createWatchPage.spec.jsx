import React from 'react';
import { shallow } from 'enzyme';

import WatchWrapper from './WatchWrapper';
import createWatchPage from './createWatchPage';

const DummyComponent = () => (<h1>Hello</h1>);

xdescribe('WatchPage HigherOrderComponent', () => {
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
