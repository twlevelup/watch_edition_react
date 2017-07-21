import React from 'react';
import {shallow} from 'enzyme';
import Button from './Button.jsx';

describe('Button component', () => {

  let button_id = "button-id";
  let clickHandlerObj = jest.genMockFunction();

  const ButtonWrapper = shallow(
    <Button id={button_id}
            onClick={clickHandlerObj}/>
  );

  test('it should have id', () => {
    let button = ButtonWrapper.find({id: button_id});
    expect(button.exists()).toBeTruthy();

  });

  test('it should trigger onClick function when clicked', () => {
    ButtonWrapper.find({id: button_id}).simulate('click');
    expect(clickHandlerObj).toBeCalled();

  });
});
