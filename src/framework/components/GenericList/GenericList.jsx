import React from 'react';
import PropTypes from 'prop-types';
import ListItem from "./ListItem/ListItem";

class GenericList extends React.Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  render() {

    let objToListItem = (obj, index) => {
      return (
        <li key={index}>
          {Object.keys(obj).map(function (key, index) {
            let value = obj[key];
            return <ListItem key={index} className='block' text={value} label={key + ': '}/>
          })}
        </li>);
    };


    let itemList = this.props.items ? this.props.items.map(objToListItem) : [];
    let className = this.props.className || 'generic-list';

    return (
      <div className={className}>
        <ul>{itemList}</ul>
      </div>
    );
  }
}

export default GenericList;
