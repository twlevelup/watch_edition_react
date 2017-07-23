import React from 'react';
import { Route } from 'react-router-dom';
import './screen_layout.scss';

class ScreenLayout extends React.Component {

  render() {
    const childWrapper = child => {
      child = React.cloneElement(child, { handlerMapper: newMap => { this.props.handlerMapper(newMap); } });
      if (child.props.path) {
        return <Route exact path={ child.props.path } component={ () => { return child; } } />;
      }
      return child;
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

ScreenLayout.defaultProps = {
  className: 'screen-layout',
  handlerMapper: newMap => {},
};

export default ScreenLayout;
