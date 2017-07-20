import React from 'react';
import './watch_screen.scss';

export default class WatchScreen extends React.Component {
  render() {
    return (
      <div id='watch-screen-view'>
        <this.props.content />
      </div>
    );
  }
}

