import React from 'react';
import './watch.scss';

export default class HomeContainer extends React.Component {
    render() {
        return (
          <div id='watch' className='watch'>
            <div className='strap strap-top' />
            <div id='watch-wrapper'>
              <div id='watch' className='case'>
                <div id='button-top' className='power' />
                <div id='watch-face' className='screen' />
              </div>
            </div>
            <div className='strap strap-bottom' />
          </div>
        );
    }
}
