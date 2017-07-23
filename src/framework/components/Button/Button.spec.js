import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button.jsx';

describe('Button component', () => {
  const buttonId = 'button-id';
  const clickHandlerObj = jest.genMockFunction();

  const ButtonWrapper = shallow(
    <Button
      id={ buttonId }
      onClick={ clickHandlerObj }
    />
  );

  test('it should have id', () => {
    const button = ButtonWrapper.find({ id: buttonId });
    expect(button.exists()).toBeTruthy();
  });

  test('it should trigger onClick function when clicked', () => {
    ButtonWrapper.find({ id: buttonId }).simulate('click');
    expect(clickHandlerObj).toBeCalled();
  });
});
