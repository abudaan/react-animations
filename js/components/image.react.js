

import React from 'react';
import guid from '../guid';


class Image extends React.Component{

  static displayName = 'Image';

  constructor(props){
    super(props);
  }


  render(){

    console.log('Image:', this.props.imageSrc);
    return(
      <div className="image-container" key={guid()}>
        <img className="image" src={this.props.imageSrc} key={guid()}/>
        <span key={guid()}>{guid()}</span>
      </div>
    );
  }
}


export default Image;
