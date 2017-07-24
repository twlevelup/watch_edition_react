import React from 'react';
import { string } from 'prop-types';

const ListItem = ({ className, label, text }) => (
  <span className={ className }>
    <span className='key'>{label}</span>
    <span className='value'>{text}</span>
  </span>
);

ListItem.propTypes = {
  className: string,
  label: string.isRequired,
  text: string.isRequired,
};

ListItem.defaultProps = {
  className: '',
};

export default ListItem;
