import React from 'react';
import './notification_form.scss';

export default class NotificationForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: this.props.defaultText,
      showPopup: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange(e) {
    this.setState({
      input: e.target.value,
    });
  }

  handleSubmit(e) {
    this.props.handleEvent({
      text: this.state.input,
      displayNotification: true,
    });
    e.preventDefault();
  }

  render() {
    return (
      <form id='notification-form' onSubmit={ this.handleSubmit }>
        <textarea
          className='notification-input'
          onChange={ this.handleTextChange }
          placeholder='Type something and hit Send!'
          rows='10'
          cols='50'
        />
        <input type='submit' value='Send notification' className='submit-btn' />
      </form>
    );
  }
}
