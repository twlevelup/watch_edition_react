import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

const Button = ({ id, onClick }) => (
  <button id={ id } className='button' onClick={ onClick } />
);

Button.propTypes = {
  id: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  id: undefined,
  onClick: () => {},
};

export default Button;
