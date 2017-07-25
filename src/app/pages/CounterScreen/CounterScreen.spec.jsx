import React from 'react';
import { shallow } from 'enzyme';

import CounterScreen from './CounterScreen';

jest.mock('../../../framework/Router/BrowserHistory');

describe('<CounterScreen />', () => {
  beforeEach(() => {
    history.push = jest.fn();
  });

  it('should display zero by default', () => {
    const wrapper = shallow(<CounterScreen />);
    expect(wrapper).toHaveText('0');
  });

  it('it should have a TOP button config adding 1', () => {
    const wrapper = shallow(<CounterScreen />);
    wrapper.instance().buttonActions.TOP();
    expect(wrapper).toHaveText('1');
  });

  it('it should have a BOTTOM button config subtract 1', () => {
    const wrapper = shallow(<CounterScreen />);
    wrapper.instance().buttonActions.BOTTOM();
    expect(wrapper).toHaveText('-1');
  });

  it('it should have a RIGHT button cgoing to the home page', () => {
    const wrapper = shallow(<CounterScreen />);
    wrapper.instance().buttonActions.RIGHT();
    expect(history.push).toHaveBeenCalledWith('/');
  });
});
