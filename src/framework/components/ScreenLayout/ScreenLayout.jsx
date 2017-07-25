import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import './screen_layout.css';
import injectHandlerMap from './HandlerMapInjection';

const ScreenLayout = ({ children, className, handlerMapper }) => {
  const wrapChild = (child) => {
    const clonedChild = injectHandlerMap(child, handlerMapper);
    if (clonedChild.props.path) {
      return (<Route
        exact
        path={ clonedChild.props.path }
        component={ () => { return clonedChild; } }
      />);
    }
    return clonedChild;
  };

  return (
    <div>
      <div className={ className }>
        {React.Children.map(children, wrapChild)}
      </div>
    </div>
  );
};

ScreenLayout.propTypes = {
  className: PropTypes.string,
  handlerMapper: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

ScreenLayout.defaultProps = {
  className: 'screen-layout',
  handlerMapper: () => {},
};

export default ScreenLayout;
