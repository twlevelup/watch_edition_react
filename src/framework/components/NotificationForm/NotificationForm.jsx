import React from 'react';
import PropTypes from 'prop-types';

import './notification_form.css';

export default class NotificationForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: props.defaultText,
      showPopup: false,
    };
  }

  handleTextChange = (e) => {
    this.setState({
      input: e.target.value,
    });
  }

  handleSubmit = (e) => {
    this.props.handleEvent({
      text: this.state.input,
      displayNotification: true,
    });
    e.preventDefault();
  }

  render() {
    return (
      <form id='notification-form' onSubmit={ event => this.handleSubmit(event) }>
        <textarea
          className='notification-input'
          onChange={ event => this.handleTextChange(event) }
          placeholder='Type something and hit Send!'
          rows='10'
          cols='50'
        />
        <input type='submit' value='Send notification' className='submit-btn' />
      </form>
    );
  }
}

NotificationForm.propTypes = {
  handleEvent: PropTypes.func.isRequired,
  defaultText: PropTypes.string,
};

NotificationForm.defaultProps = {
  defaultText: 'defaultText',
};
