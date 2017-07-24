import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button.jsx';

describe('Button component', () => {
  const buttonId = 'button-id';
  const clickHandlerObj = jest.genMockFunction();

  const composeComponent = () => shallow(
    <Button id={ buttonId } onClick={ clickHandlerObj } />
  );

  test('it should have id', () => {
    const button = composeComponent().find({ id: buttonId });
    expect(button).toBePresent();
  });

  test('it should trigger onClick function when clicked', () => {
    composeComponent().find({ id: buttonId }).simulate('click');
    expect(clickHandlerObj).toBeCalled();
  });
});
