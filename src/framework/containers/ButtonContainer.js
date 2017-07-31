import { connect } from 'react-redux';
import Button from '../components/Button/Button';

const mapStateToProps = (state, ownProps) => {
  return {
    onClick: state.ButtonActionsReducer[ownProps.type],
  };
};

export default connect(
  mapStateToProps,
  null
)(Button);
