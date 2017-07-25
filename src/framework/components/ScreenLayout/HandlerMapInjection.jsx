import React from 'react';

const injectHandlerMap = (child, handlerMapper) => {
  return React.cloneElement(child, {
    handlerMapper: (newMap) => { handlerMapper(newMap); },
  });
};

export default injectHandlerMap;
