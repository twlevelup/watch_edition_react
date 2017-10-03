import React from 'react';
import { shallow } from 'enzyme';
import ScrollList from './ScrollList';

describe('ScrollList', () => {
  let items;
  beforeEach(() => {
    items = ['item 1', 'item 2', 'item 3', 'item 4', 'item 5', 'item 6'];
  });

  describe('when the 1st item is selected', () => {
    it('should display the last 2 and 1st 3 items', () => {
      const wrapper = shallow(<ScrollList labels={ items } selectedIndex={ 0 } />);
      expect(wrapper).toIncludeText('item 5item 6item 1item 2item 3');
    });

    it('should not display item 4', () => {
      const wrapper = shallow(<ScrollList labels={ items } selectedIndex={ 0 } />);
      expect(wrapper).not.toIncludeText('item 4');
    });

    it('should have the selected class on the 1st item', () => {
      const wrapper = shallow(<ScrollList labels={ items } selectedIndex={ 0 } />);
      expect(wrapper.find('.selected')).toIncludeText('item 1');
    });
  });

  describe('when the 4th item is selected', () => {
    it('should display the last 4 items', () => {
      const wrapper = shallow(<ScrollList labels={ items } selectedIndex={ 4 } />);
      expect(wrapper).toIncludeText('item 3item 4item 5item 6item 1');
    });

    it('should not display the last 2 items', () => {
      const wrapper = shallow(<ScrollList labels={ items } selectedIndex={ 4 } />);
      expect(wrapper).not.toIncludeText('item 2');
    });

    it('should have the selected class on the 1st item', () => {
      const wrapper = shallow(<ScrollList labels={ items } selectedIndex={ 4 } />);
      expect(wrapper.find('.selected')).toIncludeText('item 5');
    });
  });
});
