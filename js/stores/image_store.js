import EventEmitter from 'events';
import ActionTypes from '../constants';
import AppDispatcher from '../app_dispatcher';

let CHANGE_EVENT = 'change';

class ImageStore extends EventEmitter {

  constructor () {
    super();
    this.images = ['1.jpg', '2.jpg', '3.jpg'];
    this.image_folder = 'img/';
    this.index = 0;

    AppDispatcher.register((action) => {
      this.handle(action);
    });
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  getData() {
    //console.log('getTweets', this.tweets);
    return {
      image: this.image_folder + this.images[this.index]
    };
  }

  handle(action) {
    switch(action.type) {

      case ActionTypes.NEXT_IMAGE:
        this.index++;
        if(this.index === this.images.length){
          this.index = 0;
        }
        this.emitChange();
        break;

      case ActionTypes.PREV_IMAGE:
        this.index--;
        if(this.index === -1){
          this.index = this.images.length - 1;
        }
        this.emitChange();
        break;


      default:
      // do nothing
    }
  }
}

export default new ImageStore();
