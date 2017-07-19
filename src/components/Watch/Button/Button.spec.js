import React from 'react';
import {mount} from 'enzyme';
import Button from './Button.jsx';

describe('Button component', () => {

  let button_id = "button-id";
  let clickHandlerObj = {handler: jest.genMockFunction()};

  const ButtonWrapper = mount(
    <Button id={button_id}
            showOnClick={clickHandlerObj}/>
  );

  test('it should have id', () => {
    let button = ButtonWrapper.find({id: button_id});
    expect(button.exists()).toBeTruthy();

  });

  test('it should trigger onClick function when clicked', () => {
    ButtonWrapper.find({id: button_id}).simulate('click');
    expect(clickHandlerObj.handler).toBeCalled();

  });
});

