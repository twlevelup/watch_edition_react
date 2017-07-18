import React from 'react';
import Watch from '../../components/Watch/Watch.jsx';

import './watch_container.scss';

export default class WatchContainer extends React.Component {
  render() {
    return (
      <div id='watch-container'>
        <Watch />
      </div>
    );
  }
}

