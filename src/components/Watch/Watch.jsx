import React from 'react';
import './watch.scss';
import Button from "./Button/Button";
import Home from "./Home/Home.jsx";
import ContactList from "./ContactList/ContactList.jsx";
import {Locations, Location} from 'react-router-component';

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

            <Locations>
              <Location path="/" handler={Home}/>
              <Location path="/contacts" handler={Home}/>
            </Locations>
          </div>
        </div>
        <div className='strap strap-bottom'/>
      </div>
    );
  }
}


