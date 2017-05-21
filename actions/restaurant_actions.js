import {
  LIKE_RESTAURANT,
  CLEAR_LIKED_RESTAURANTS
} from './types';

export const likeRestaurant = (restaurant) => {
  return {
    payload: restaurant,
    type: LIKE_RESTAURANT
  };
};

export const clearLikedRestaurants = () => {
  return { type: CLEAR_LIKED_RESTAURANTS };
};
