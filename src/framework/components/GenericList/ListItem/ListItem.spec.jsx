import React from 'react';
import { shallow } from 'enzyme';
import ListItem from './ListItem';

describe('List Item', () => {
  const composeComponent = ({ label, text }) => shallow(<ListItem label={ label } text={ text } />);

  test('It displays label and text', () => {
    const items = [
      { label: 'labelA', text: 'some text' },
      { label: 'labelB', text: 'some other text' },
    ];
    items.forEach((item) => {
      const component = composeComponent(item);
      expect(component.find('.key').text()).toEqual(item.label);
      expect(component.find('.value').text()).toEqual(item.text);
    });
  });

  test('it should have no class by default', () => {
    expect(shallow(<ListItem label='' text='' />).find('span').first()).toHaveClassName('');
  });

  describe('When rendered with a className', () => {
    test('it should have that class', () => {
      expect(shallow(<ListItem label='' text='' className='testListClass' />)).toHaveClassName('testListClass');
    });
  });
});
