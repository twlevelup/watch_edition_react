import React from 'react';

import WatchWrapper from './WatchWrapper';

const createWatchPage = (actions) => (
  Component => ((props) => (
    <WatchWrapper actions={ actions } >
      <Component { ...props } />
    </WatchWrapper>))
);


export default createWatchPage;
