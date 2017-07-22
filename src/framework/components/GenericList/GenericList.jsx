import React from 'react';

export default class GenericList extends React.Component {
  render() {

    let objToListItem = (obj, index) => {
      return (
        <li key={ index }>
          { Object.keys(obj).map(function (key, index) {
            let value = obj[key];
            return (
              <span className="block" key={ index }>
                <span className="key">{key}</span>: <span className="value">{value}</span>
              </span>
            )
          })}
        </li>);
    };


    let itemList = this.props.items? this.props.items.map(objToListItem): [];
    let className = this.props.className || 'generic-list';

    return (
      <div className={className}>
        <ul>{itemList}</ul>
      </div>
    );
  }
}

