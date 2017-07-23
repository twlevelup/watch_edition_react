import React from 'react';
import PropTypes from 'prop-types';

export const WatchWrapper = props => (
  <div>
    { props.children }
  </div>
);

WatchWrapper.propTypes = {
  children: PropTypes.element.isRequired,
};


const createWatchPage = () => (
  Component => ((props) => (
    <WatchWrapper>
      <Component { ...props } />
    </WatchWrapper>))
);


export default createWatchPage;
