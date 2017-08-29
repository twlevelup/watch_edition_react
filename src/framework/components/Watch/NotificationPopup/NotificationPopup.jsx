import React from 'react';
import PropTypes from 'prop-types';
import WithButtonConfigs from '../../../containers/WithButtonConfigs';
import './notification_popup.css';

export class NotificationPopupComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.text,
      show: props.show,
    };
  }

  componentDidMount = () => {
    if (this.props.show) {
      this.showPopup();
    }
  }

  componentWillReceiveProps = (nextProps) => {
    const { text, show } = nextProps;
    this.setState({ text, show });
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.show && !prevState.show) {
      this.showPopup();
    } else if (prevState.show && !this.state.show) {
      this.props.remapButtons({ OVERRIDE: false });
    }
  }

  showPopup = () => {
    this.props.remapButtons(this.buttonConfig);
  }

  buttonConfig = {
    OVERRIDE: () => this.setState({ show: false }),
  };

  render() {
    const { show, text } = this.state;
    const visibilityClass = show ? '' : 'hidden';
    return (
      <div className={ `notification-popup ${ visibilityClass }` }>
        <p>
          {text}{show}
        </p>
      </div>
    );
  }
}

NotificationPopupComp.propTypes = {
  show: PropTypes.bool,
  text: PropTypes.string.isRequired,
  remapButtons: PropTypes.func.isRequired,
};

NotificationPopupComp.defaultProps = {
  show: false,
};

export default WithButtonConfigs(NotificationPopupComp);
