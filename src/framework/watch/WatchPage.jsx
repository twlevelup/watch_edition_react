import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '../components/Button/Button';

import '../../app/components/Watch/watch.scss';

export default class WatchWrapper extends Component {
  render() {
    const { children, actions } = this.props;
    return (
      <div id='watch' className='watch'>
        <div className='strap strap-top' />
        <div id='watch-face' className='case'>
          { /* TODO: Add Notifications */ }
          <Button id='button-right' onClick={ () => actions.right() } />
          <Button id='button-left' onClick={ () => actions.left() } />
          <Button id='button-bottom' onClick={ () => actions.bottom() } />
          <Button id='button-top' onClick={ () => actions.top() } />
          { children }
        </div>
        <div className='strap strap-bottom' />
      </div>
    );
  }
}

WatchWrapper.propTypes = {
  children: PropTypes.element.isRequired,
  actions: PropTypes.shape({
    left: PropTypes.func.isRequired,
    right: PropTypes.func.isRequired,
    bottom: PropTypes.func.isRequired,
    top: PropTypes.func.isRequired,
  }).isRequired,
};
