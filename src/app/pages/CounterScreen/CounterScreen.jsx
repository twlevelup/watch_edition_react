import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WithButtonConfigs from '../../../framework/containers/WithButtonConfigs';
import ButtonAction from '../../../framework/util/ButtonAction';

export class CounterScreenComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { number: props.number };
  }

  componentDidMount() {
    this.props.remapButtons(this.buttonActions);
  }

  buttonActions = {
    RIGHT: () => ButtonAction.goToPage('/'),
    BOTTOM: () => this.setState({ number: this.state.number - 1 }),
    TOP: () => this.setState({ number: this.state.number + 1 }),
  };

  render() {
    return (<h1>{this.state.number}</h1>);
  }
}

CounterScreenComponent.propTypes = {
  remapButtons: PropTypes.func.isRequired,
  number: PropTypes.number,
};

CounterScreenComponent.defaultProps = {
  number: 0,
};

export default WithButtonConfigs(CounterScreenComponent);
