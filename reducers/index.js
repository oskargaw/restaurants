import { combineReducers } from 'redux';
import auth from './auth_reducer';
import likedRestaurants from './likes_reducer';

export default combineReducers({
  auth, likedRestaurants
});
