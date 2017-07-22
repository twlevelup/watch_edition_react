import React from 'react';
import {shallow} from 'enzyme';
import GenericList from './GenericList.jsx';

describe('GenericList component', () => {

  describe('When a list of objects is passed to the [items] props', () => {
    const dummyContactObject = {name: 'ThoughtWorks', phone: '02637434'};
    const dummyAddressObject = {unit: '51', 'POSTAL ADDRESS': 'somwhere on mars'};
    const componentWrapper = shallow(
      <GenericList className="test" items={[dummyContactObject, dummyAddressObject]}/>
    );

    // todo: change this to be a snapshot test?
    test('it should list all objects by their keys and values', () => {
      expect(componentWrapper.contains(<span className="key">name</span>)).toBeTruthy();
      expect(componentWrapper.contains(<span className="value">{dummyContactObject.name}</span>)).toBeTruthy();
      expect(componentWrapper.contains(<span className="key">phone</span>)).toBeTruthy();
      expect(componentWrapper.contains(<span className="value">{dummyContactObject.phone}</span>)).toBeTruthy();
      expect(componentWrapper.contains(<span className="key">unit</span>)).toBeTruthy();
      expect(componentWrapper.contains(<span className="value">{dummyAddressObject.unit}</span>)).toBeTruthy();
      expect(componentWrapper.contains(<span className="key">POSTAL ADDRESS</span>)).toBeTruthy();
      expect(componentWrapper.contains(<span className="value">{dummyAddressObject['POSTAL ADDRESS']}</span>)).toBeTruthy();
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
      expect(shallow(<GenericList className="dummyDum-DumDum"/>).find('.dummyDum-DumDum').exists()).toBeTruthy();
    });
  });
});

