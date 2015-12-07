import AppDispatcher from '../app_dispatcher';
import ActionTypes from '../constants';

export default {

  nextImage(){
    AppDispatcher.dispatch({
      type: ActionTypes.NEXT_IMAGE
    });
  },

  prevImage(){
    AppDispatcher.dispatch({
      type: ActionTypes.PREV_IMAGE
    });
  }
};
