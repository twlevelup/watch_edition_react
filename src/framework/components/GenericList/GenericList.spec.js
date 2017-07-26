import React from 'react';
import { shallow } from 'enzyme';
import GenericList from './GenericList';

describe('GenericList component', () => {
  const DummyListItem = text => <div>{text}</div>;
  const defaultProps = {
    items: [],
    className: 'some-class-name',
    liClassName: 'lilili',
    listItem: DummyListItem,
  };

  const composeComponent = (props = {}) => (
    shallow(<GenericList { ...defaultProps } { ...props } />)
  );

  describe('When a list of objects is passed to the [items] props', () => {
    test('it should list objects using ListItem component', () => {
      const contactsList = composeComponent({
        items: ['itemA', 'itemB'],
      });
      const listItems = contactsList.find('li');
      expect(listItems).toHaveLength(2);
      expect(listItems.at(0)).toHaveText('itemA');
      expect(listItems.at(1)).toHaveText('itemB');
    });
  });

  describe('When rendered without props', () => {
    test('it should be rendered with no items', () => {
      expect(composeComponent().hasClass(defaultProps.className)).toBeTruthy();
    });
  });

  describe('When no [class] property is set', () => {
    test('it should set the class to default-list', () => {
      expect(composeComponent({ className: undefined }).hasClass('generic-list')).toBeTruthy();
    });
  });

  describe('When [class] property is set', () => {
    test('it should set the class to [class]', () => {
      expect(composeComponent({ className: 'yo' }).hasClass('yo')).toBeTruthy();
    });
  });
});

