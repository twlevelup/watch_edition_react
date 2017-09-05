import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import { getActionByType } from './selectors/buttonActionSelector';


const mapStateToProps = state => ({
  onClick: getActionByType('SCREEN', state),
});

const component = ({ children, onClick }) => (
  <div onClick={ onClick } role='button' tabIndex={ 0 } >
    { children }
  </div>
);

component.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(component);
