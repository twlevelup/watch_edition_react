import React from 'react';
import './button.scss';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button id={this.props.id} className='button' onClick={ () => {this.props.onClick.handler()}}>
      </button>
    );
  }
}
