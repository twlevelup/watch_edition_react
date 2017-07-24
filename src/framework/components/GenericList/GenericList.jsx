import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem/ListItem';

class GenericList extends React.Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  render() {
    const objToListItem = (obj, index) => {
      return (
        <li key={ index }>
          {Object.keys(obj).map((key) => {
            const value = obj[key];
            return <ListItem key={ key } className='block' text={ value } label={ `${ key }: ` } />;
          })}
        </li>);
    };

    const itemList = this.props.items ? this.props.items.map(objToListItem) : [];
    return (
      <div className={ this.props.className }>
        <ul>{itemList}</ul>
      </div>
    );
  }
}

GenericList.propTypes = {
  className: PropTypes.string,
};

GenericList.defaultProps = {
  className: 'generic-list',
};

export default GenericList;
