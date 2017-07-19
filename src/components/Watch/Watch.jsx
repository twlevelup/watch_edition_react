import React from 'react';
import ReactDOM from 'react-dom';
import './watch.scss';
import Button from "./Button/Button";
import ViewRouter from './ViewRouter';
export default class Watch extends React.Component {

  handleClick() {

  }

  render() {
    return (
      <div id='watch' className='watch'>
        <div className='strap strap-top'/>
        <div id='watch-wrapper'>
          <div id='watch' className='case'>
            <Button id="button-left"
                    showOnClick={this.handleClick}/>
            <Button id="button-right"
                    showOnClick={this.handleClick}/>
            <Button id="button-top"
                    showOnClick={this.handleClick}/>
            <Button id="button-bottom"
                    showOnClick={this.handleClick}/>
            <ViewRouter />
          </div>
        </div>
        <div className='strap strap-bottom'/>
      </div>
    );
  }
}




