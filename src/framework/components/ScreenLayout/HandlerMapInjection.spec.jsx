import React from 'react';

import injectHandlerMap from './HandlerMapInjection';

describe('injectHandlerMap function', () => {
  const Mock = () => (
    <div>Mock</div>
  );
  test('It should inject handlerMapper function to the react component', () => {
    const handlerFn = jest.fn().mockReturnValueOnce('test');
    const result = injectHandlerMap(<Mock />, handlerFn);
    result.props.handlerMapper();
    expect(handlerFn).toHaveBeenCalled();
  });
});
