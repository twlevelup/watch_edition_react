import React from 'react';
import {shallow} from 'enzyme';
import GenericList from './GenericList.jsx';

describe('GenericList component', () => {

  describe('When a list of objects is passed to the [items] props', () => {
    const dummyContactObject = {name: 'Thoguhtworks', phone: '02637434'};
    const dummyAddressObject = {unit: '51', 'POSTAL ADDRESS': 'somwhere on mars'};
    const contactsWrapper = shallow(
      <GenericList class='test' items={[dummyContactObject, dummyAddressObject]}/>
    );

    test('it should list all objects by key and value', () => {
      expect(contactsWrapper.find('.key').at(0), dummyContactObject.name).toBeTruthy();
      expect(contactsWrapper.find('.key').at(1), dummyAddressObject.unit).toBeTruthy();
      expect(contactsWrapper.find('.value').at(0), dummyAddressObject.phone).toBeTruthy();
      expect(contactsWrapper.find('.value').at(1), dummyAddressObject['POSTAL ADDRESS']).toBeTruthy();
    });

    test('it should list duplicate objects without throwing an error', () => {
      const contactsWrapper = shallow(
        <GenericList class='test' items={[dummyContactObject, dummyContactObject, dummyContactObject]}/>
      );
      expect(contactsWrapper.find('li')).toHaveLength(3);
    });
  });

  describe('When no [class] property is set', () => {
    test('it should set the class to default-list', () => {
      expect(shallow(<GenericList />).find('.generic-list').exists()).toBeTruthy();
    });
  });

  describe('When [class] property is set', () => {
    test('it should set the class to [class]', () => {
      expect(shallow(<GenericList class="dummyDum-DumDum"/>).find('.dummyDum-DumDum').exists()).toBeTruthy();
    });
  });
});

