import React from 'react';
import Watch from '../Watch/Watch';
import './HomePage.scss';

export default class HomePage extends React.Component {
    render() {
        return (
          <div id='home-container'>
            <div id='left'>
              <h1>LevelUp Watch Edition</h1>
              <p>This is LevelUp Watch Edition sample app.</p>
            </div>
            <div id='right'>
              <Watch />
            </div>
          </div>
        );
    }
}

