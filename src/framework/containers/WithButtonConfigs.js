/* eslint-disable react/prop-types */
import * as React from 'react';
import { connect } from 'react-redux';
import { remapButtons } from '../actions/ButtonAction';

const ButtonConfigsHOC = (WrappedComponent) => {
  return class Wrapper extends React.Component {
    componentWillMount() {
      this.props.remapButtons();
    }

    render() {
      return <WrappedComponent { ...this.props } />;
    }
  };
};

function WithButtonConfigs(component, buttonConfigs) {
  const mapDispatchToProps = (dispatch) => {
    return {
      remapButtons: (newButtonConfigs = buttonConfigs) => {
        dispatch(remapButtons(newButtonConfigs));
      },
    };
  };

  return connect(
    null,
    mapDispatchToProps
  )(ButtonConfigsHOC(component));
}

export default WithButtonConfigs;
