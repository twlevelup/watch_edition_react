import React from 'react';
import PropTypes from 'prop-types';
import './button.css';
import ButtonAction from '../../util/ButtonAction';

const Button = ({ id, onClick }) => {
  return (<button id={ id } className='button' onClick={ onClick } />);
};


Button.propTypes = {
  id: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  id: undefined,
  onClick: ButtonAction.doNothing,
};

export default Button;
