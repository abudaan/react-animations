import React from 'react';
import ImageStore from '../stores/image_store';
import Carousel from './carousel.react';
import Controls from './controls.react';

/* main react component, the only component with state */


class App extends React.Component{

  static displayName = 'App';

  constructor(props){
    super(props);
    this.state = ImageStore.getData();
    this.onChangeListener = this.onChange.bind(this);
  }

  componentDidMount() {
    ImageStore.addChangeListener(this.onChangeListener);
  }

  componentWillUnmount() {
    ImageStore.removeChangeListener(this.onChangeListener);
  }

  onChange(){
    let state = ImageStore.getData();
    this.setState(state);
    //console.log(this.state);
  }

  render(){
    return(
      <div>
        <Controls />
        <Carousel imageSrc={this.state.image} />
      </div>
    );
  }
}

App.propTypes = {};


export default App;
