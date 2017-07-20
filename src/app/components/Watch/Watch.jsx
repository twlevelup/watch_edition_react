import React from 'react';
import './watch.scss';
import Button from "../../../framework/components/Button/Button";
import ViewRouter from '../Router';
export default class Watch extends React.Component {


  render() {
    let handleClick = (e) => {
      e.preventDefault();
      alert('default handle click ');
    };

    let buttonEvents = {
      LEFT: {
        handler: (e) => {
          alert('left');
        }
      },
      RIGHT: {
        handler: (e) => {
          alert('right');
        }
      }
    };

    return (
      <div id='watch-container'>
        <div id='watch' className='watch'>
          <div className='strap strap-top'/>
          <div id='watch-wrapper'>
            <div id='watch' className='case'>
              <Button id="button-right"
                      showOnClick={buttonEvents.RIGHT}/>
              <Button id="button-left"
                      showOnClick={buttonEvents.LEFT}/>
              <Button id="button-top"
                      showOnClick={handleClick}/>
              <Button id="button-bottom"
                      showOnClick={handleClick}/>

              <ViewRouter buttonEvents={buttonEvents}/>
            </div>
          </div>
          <div className='strap strap-bottom'/>
        </div>
      </div>
    );
  }
}




