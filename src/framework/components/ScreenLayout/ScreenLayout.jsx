import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import './screen_layout.scss';

class ScreenLayout extends React.Component {

  render() {
    const childWrapper = child => {
      const clonedChild = React.cloneElement(child, {
        handlerMapper: newMap => { this.props.handlerMapper(newMap); },
      });
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
          {React.Children.map(this.props.children, childWrapper)}
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
