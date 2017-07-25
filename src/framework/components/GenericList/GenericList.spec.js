import React from 'react';
import { shallow } from 'enzyme';
import GenericList from './GenericList';

describe('GenericList component', () => {
  let componentWrapper;
  beforeEach(() => {
    componentWrapper = shallow(<GenericList items={ [] } />);
  });

  describe('When a list of objects is passed to the [items] props', () => {
    const dummyContactObject = { name: 'ThoughtWorks', phone: '02637434' };
    const dummyAddressObject = { unit: '51', 'POSTAL ADDRESS': 'somwhere on mars' };

    test('it should list objects using ListItem component', () => {
      const contactsWrapper = shallow(
        <GenericList class='test' items={ [dummyContactObject, dummyContactObject, dummyAddressObject] } />
      );
      expect(contactsWrapper.find('li')).toHaveLength(3);
      expect(contactsWrapper.find('ListItem')).toHaveLength(6);
    });
  });

  describe('When rendered without props', () => {
    test('it should be rendered with no items', () => {
      expect(componentWrapper.find('.generic-list')).toBePresent();
    });
  });

  describe('When no [class] property is set', () => {
    test('it should set the class to default-list', () => {
      expect(componentWrapper.find('.generic-list')).toBePresent();
    });
  });

  describe('When [class] property is set', () => {
    test('it should set the class to [class]', () => {
      expect(shallow(<GenericList className='dummyDum-DumDum' items={ [] } />)
        .find('.dummyDum-DumDum')).toBePresent();
    });
  });
});

