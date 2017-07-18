import React from 'react';
import WatchContainer from '../Watch/WatchContainer.jsx';
import './HomeContainer.scss';

export default class HomeContainer extends React.Component {
    render() {
        return (
          <div id='home-container'>
            <div id='left'>
              <h1>LevelUp Watch Edition</h1>
              <p>This is LevelUp Watch Edition sample app.</p>
            </div>
            <div id='right'>
              <WatchContainer />
            </div>
          </div>
        );
    }
}

