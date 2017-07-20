import React from "react";
import {Route} from "react-router-dom";
import './screen_layout.scss'

class ScreenLayout extends React.Component {

  render() {
    return (
      <div id="screen-layout" className="screen-layout">
        {React.Children.map(this.props.children, child => {
          if (child.props.path) {
            return <Route exact path={child.props.path} component={() => {return child}}/>
          } else {
            return child;
          }
        })}
      </div>
    )
  }
}

export default ScreenLayout;
