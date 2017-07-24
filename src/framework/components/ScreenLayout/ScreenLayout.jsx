import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import './screen_layout.scss';

class ScreenLayout extends React.Component {

  render() {
    const injectHandlerMap = child => {
      return React.cloneElement(child, {
        handlerMapper: newMap => { this.props.handlerMapper(newMap); },
      });
    }

    const wrapChild = child => {
      const clonedChild = injectHandlerMap(child)
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
        <div className={ this.props.className }>
          {React.Children.map(this.props.children, wrapChild)}
        </div>
      </div>
    );
  }
}

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
