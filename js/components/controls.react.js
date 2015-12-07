import React from 'react';
import Action from '../actions/action';


class Controls extends React.Component{

  static displayName = 'Controls';

  constructor(props){
    super(props);
  }

  render(){

    return(
      <div>
        <div className="arrow-left" onClick={Action.prevImage}>
          <div className="icon">&#61523;</div>
        </div>
        <div className="arrow-right" onClick={Action.nextImage}>
          <div className="icon">&#61524;</div>
        </div>
      </div>
    );
  }
}


export default Controls;
