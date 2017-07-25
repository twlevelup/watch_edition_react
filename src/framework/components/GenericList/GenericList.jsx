import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem/ListItem';

const objToListItem = (obj, index) => {
  return (
    <li key={ index }>
      {Object.keys(obj).map((key) => {
        const value = obj[key];
        return <ListItem key={ key } className='block' text={ value } label={ `${ key }: ` } />;
      })}
    </li>);
};

const GenericList = ({ className, items }) => {
  const itemList = items ? items.map(objToListItem) : [];

  return (
    <div className={ className }>
      <ul>{itemList}</ul>
    </div>
  );
};

GenericList.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

GenericList.defaultProps = {
  className: 'generic-list',
};

export default GenericList;
