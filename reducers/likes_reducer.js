import _ from 'lodash';
import {
  LIKE_RESTAURANT,
  CLEAR_LIKED_RESTAURANTS
} from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case LIKE_RESTAURANT:
      return [ action.payload, ...state ];
      // return _.uniqBy([
      //   action.payload, ...state
      // ], 'text');
    case CLEAR_LIKED_RESTAURANTS:
      return [];
    default:
      return state;
  }
}
