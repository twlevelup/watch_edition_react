import React from 'react';
import './button.scss';

export default class Button extends React.Component {
  constructor() {
    super();
    this.state = {
      id: null
    }
  }
  componentDidMount() {
    this.setState({
      id: this.props.id
    })
  }

  handleOnClick() {
    this.props.showOnClick()
  }

  render() {
    return (
      <div id={this.state.id} className="button" onClick={ this.handleOnClick()}>

      </div>
    );
  }
}
