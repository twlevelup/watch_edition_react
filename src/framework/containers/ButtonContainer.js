import { connect } from 'react-redux';
import Button from '../components/Button/Button';

const mapStateToProps = (state, ownProps) => {
  if (state.ButtonActionsReducer.OVERRIDE) {
    return {
      onClick: state.ButtonActionsReducer.OVERRIDE,
    };
  }
  return {
    onClick: state.ButtonActionsReducer[ownProps.type],
  };
};

export default connect(
  mapStateToProps,
  null
)(Button);
