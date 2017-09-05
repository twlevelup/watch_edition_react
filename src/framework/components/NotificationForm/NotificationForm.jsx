import React from 'react';
import PropTypes from 'prop-types';
import NotificationContainer from '../../containers/NotificationContainer';

import './notification_form.css';

export class NotificationFormComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: props.text,
    };
  }

  handleTextChange = (e) => {
    this.setState({
      input: e.target.value,
    });
  }

  buttonConfigs = {
    OVERRIDE: () => {
      this.props.hideNotification();
      this.props.remapButtons({ OVERRIDE: false });
    },
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.pushNotification(this.state.input);
    this.props.remapButtons(this.buttonConfigs);
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

NotificationFormComponent.propTypes = {
  pushNotification: PropTypes.func.isRequired,
  hideNotification: PropTypes.func.isRequired,
  remapButtons: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default NotificationContainer(NotificationFormComponent);
