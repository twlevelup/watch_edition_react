import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { remapButtons } from '../actions/ButtonAction';

// TODO: we could use lodash isFunction instead of this.
function isFunction(functionToCheck) {
  const getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

const ButtonConfigsHOC = (WrappedComponent) => {
  class Wrapper extends Component {
    componentDidMount() {
      this.props.remapButtons();
    }

    render() {
      return <WrappedComponent { ...this.props } />;
    }
  }

  Wrapper.propTypes = {
    remapButtons: PropTypes.func.isRequired,
  };

  return Wrapper;
};

function WithButtonConfigs(component, buttonConfigs) {
  const mapStateToProps = (state, ownProps) => {
    return {
      ...ownProps,
      ...((state.router || {}).location || {}).state ? state.router.location.state : {},
    };
  };


  const mapDispatchToProps = (dispatch) => {
    return {
      dispatchRemapButtons: buttonConfig => dispatch(remapButtons(buttonConfig)),
    };
  };

  const mergeProps = (stateProps, dispatchProps, ownProps) => {
    return {
      ...ownProps,
      ...stateProps,
      remapButtons: (newButtonConfig = buttonConfigs) => {
        const buttonActions = isFunction(newButtonConfig) ?
          newButtonConfig({ ...stateProps, ...ownProps }) :
          newButtonConfig;
        dispatchProps.dispatchRemapButtons(buttonActions);
      },
    };
  };

  return connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
  )(ButtonConfigsHOC(component));
}

export default WithButtonConfigs;
