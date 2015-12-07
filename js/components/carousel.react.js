/*
var ImageCarousel = React.createClass({
  propTypes: {
    imageSrc: React.PropTypes.string.isRequired
  },
  render: function() {
    return (
      <div>
        <ReactCSSTransitionGroup transitionName="carousel" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
          <img src={this.props.imageSrc} key={this.props.imageSrc} />
        </ReactCSSTransitionGroup>
      </div>
    );
  }
});
*/


import React from 'react';
import Image from './image.react';
import guid from '../guid';
let ReactCSSTransitionGroup = require('react-addons-css-transition-group');
let ReactTransitionGroup = require('react-addons-transition-group');


class Carousel extends React.Component{

  static displayName = 'Carousel';

  constructor(props){
    super(props);
  }

  render(){
    // return(
    //   <div>
    //     <ReactCSSTransitionGroup key={guid()} component="div" transitionAppear={true} transitionName="carousel" transitionEnterTimeout={0} transitionLeaveTimeout={0}>
    //     </ReactCSSTransitionGroup>
    //   </div>
    // );
    // return(
    //   <div>
    //     <ReactCSSTransitionGroup imageSrc={this.props.imageSrc} component={Image} transitionName="carousel" transitionEnterTimeout={0} transitionLeaveTimeout={0}>
    //     </ReactCSSTransitionGroup>
    //   </div>
    // );
    return(
      <ReactCSSTransitionGroup className="image-container" component="div" transitionName="carousel" transitionEnterTimeout={0} transitionLeaveTimeout={0}>
        <Image imageSrc={this.props.imageSrc} key={guid()} />
      </ReactCSSTransitionGroup>
    );
  }
}


export default Carousel;
