import React from 'react';
import PropTypes from 'prop-types';

const GenericList = (props) => {
  const {
    className,
    liClassName,
    items,
    listItem,
    selectedItemIndex,
  } = props;

  return (
    <ul className={ className }>
      {items.map((item, index) => (
        <li
          key={ `generic-list-${ index + 1 }` }
          className={ `${ liClassName } ${ index === selectedItemIndex ? 'selected' : '' }` }
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
  selectedItemIndex: PropTypes.number,
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  listItem: PropTypes.func.isRequired,
};

GenericList.defaultProps = {
  className: 'generic-list',
  liClassName: '',
  selectedItemIndex: 0,
  items: [],
};

export default GenericList;
