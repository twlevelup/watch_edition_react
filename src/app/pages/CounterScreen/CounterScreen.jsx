import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CounterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { number: 0 };

    props.handlerMapper(this.buttonActions);
  }

  buttonActions = {
    RIGHT: () => history.push('/'),
    BOTTOM: () => this.setState({ number: this.state.number - 1 }),
    TOP: () => this.setState({ number: this.state.number + 1 }),
  };

  render() {
    return (<h1>{this.state.number}</h1>);
  }
}

CounterScreen.propTypes = {
  handlerMapper: PropTypes.func,
};

CounterScreen.defaultProps = {
  handlerMapper: actions => actions,
};

