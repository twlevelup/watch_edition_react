import React from 'react';
import { shallow } from 'enzyme';
import ContactListScreen from './ContactListScreen';

describe('ContactListScreen component', () => {
  const componentWrapper = shallow(
    <ContactListScreen contacts={ [] } />
  );

  test('it should have a title', () => {
    expect(componentWrapper.find('.title')).toBePresent();
  });

  test('it should contain a GenericList component', () => {
    expect(componentWrapper.find('GenericList')).toBePresent();
  });
});
