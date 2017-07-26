import React from 'react';
import PropTypes from 'prop-types';

const GenericList = (props) => {
  const {
    className,
    liClassName,
    items,
    listItem,
  } = props;

  return (
    <ul className={ className }>
      {items.map((item, index) => (
        <li
          key={ `generic-list-${ index + 1 }` }
          className={ liClassName }
        >
          {listItem(item)}
        </li>
      ))}
    </ul>
  );
};

GenericList.propTypes = {
  className: PropTypes.string,
  liClassName: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  listItem: PropTypes.func.isRequired,
};

GenericList.defaultProps = {
  className: 'generic-list',
  liClassName: '',
  items: [],
};

export default GenericList;
