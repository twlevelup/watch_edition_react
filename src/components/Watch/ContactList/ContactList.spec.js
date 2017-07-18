import React from 'react';
import {mount} from 'enzyme';
import ContactList from './ContactList.jsx';

describe('ContactList component', () => {
  const contact1Name = 'Test contact 1';
  const contact1Phone = '2736458234';
  const dummyContacts = [
    {name: contact1Name, phone: contact1Phone},
    {name: 'Blah lol', phone: '2736458234'}
  ];

  const contactsWrapper = mount(
    <ContactList contacts={dummyContacts}/>
  );

  test('it should display contact\'s name', () => {
    const result = contactsWrapper.find('#contact-list');
    expect(result.text()).toContain(contact1Name);
  });

  test('it should display contact\'s phone', () => {
    const result = contactsWrapper.find('#contact-list');
    expect(result.text()).toContain(contact1Name);
  });

  test('it should still work with duplicate identical contacts', () => {
    const result = mount(<ContactList contacts={[{name: contact1Name}, {name: contact1Name}]}/>).find('#contact-list li');
    expect(result).toHaveLength(2);
    expect(result.first().text()).toContain(contact1Name);
  });

});

