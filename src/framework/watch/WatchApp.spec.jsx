import React from 'react';
import { shallow } from 'enzyme';

import { Route } from 'react-router-dom';

import WatchApp from './WatchApp';

describe('<WatchApp />', () => {
  const Component1 = () => <div>Comp1</div>;
  const Component2 = () => <div>Comp2</div>;
  it('should create a route for every component', () => {
    const pages = [
      { path: '/home', component: Component1 },
      { path: '/contacts', component: Component2 },
    ];

    const wrapper = shallow(<WatchApp pages={ pages } />);

    const watchRouteWrappers = wrapper.find(Route);

    expect(watchRouteWrappers.at(0)).toHaveProp('path', pages[0].path);
    expect(watchRouteWrappers.at(0)).toHaveProp('component', Component1);

    expect(watchRouteWrappers.at(1)).toHaveProp('path', pages[1].path);
    expect(watchRouteWrappers.at(1)).toHaveProp('component', Component2);
  });
});
