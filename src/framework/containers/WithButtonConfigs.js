import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { remapButtons } from '../actions/ButtonAction';

const ButtonConfigsHOC = (WrappedComponent) => {
  class Wrapper extends React.Component {
    componentWillMount() {
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
