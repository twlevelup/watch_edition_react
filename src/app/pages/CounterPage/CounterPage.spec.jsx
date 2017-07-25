import React from 'react';
import { shallow } from 'enzyme';
import CounterPage from './CounterPage';

describe('<CounterPage />', () => {
  it('should display the number provided', () => {
    const wrapper = shallow(<CounterPage number={ 123 } />);
    expect(wrapper).toHaveText('123');
  });
});
