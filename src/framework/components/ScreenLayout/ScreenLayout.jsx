import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router';
import './screen_layout.css';

const ScreenLayout = ({ children, className, onClick }) => {
  const wrapChild = (child) => {
    if (child.props.path) {
      return (<Route
        exact
        path={ child.props.path }
        component={ () => { return child; } }
      />);
    }
    return child;
  };

  return (
    <div>
      <div id='watch-screen' className={ className } >
        <div
          role='button'
          tabIndex={ 0 }
          onClick={ onClick }
        >
          {React.Children.map(children, wrapChild)}
        </div>
      </div>
    </div>
  );
};

ScreenLayout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  onClick: PropTypes.func,
};

ScreenLayout.defaultProps = {
  className: 'screen-layout',
  onClick: () => {},
};

export default ScreenLayout;
