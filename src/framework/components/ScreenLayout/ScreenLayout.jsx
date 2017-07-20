import React from "react";
import {Route} from "react-router-dom";
import "./screen_layout.scss";

class ScreenLayout extends React.Component {

  render() {

    let compRouteWrapper = child => {
      if (child.props.path) {
        return <Route exact path={child.props.path} component={() => {return child}}/>
      }else {
        return child;
      }
    }

    return (
      <div className={this.props.className}>
        {React.Children.map(this.props.children, compRouteWrapper)}
      </div>
    )
  }
}

ScreenLayout.defaultProps = {
  className: "screen-layout"
}

export default ScreenLayout;
