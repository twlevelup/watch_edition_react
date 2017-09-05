import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { remapButtons } from '../actions/ButtonAction';

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
    return { ...ownProps, ...((state.router || {}).location || {}).state ? state.router.location.state : {} };
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      remapButtons: (newButtonConfigs = buttonConfigs) => {
        dispatch(remapButtons(newButtonConfigs));
      },
    };
  };

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(ButtonConfigsHOC(component));
}

export default WithButtonConfigs;
