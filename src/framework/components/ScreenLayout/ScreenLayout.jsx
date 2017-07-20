import React from "react";
import {Route} from "react-router-dom";

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
      <div className="screen-layout">
        {React.Children.map(this.props.children, compRouteWrapper)}
      </div>
    )
  }
}

export default ScreenLayout;
