import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { AsyncStorage } from 'react-native';
import reducers from '../reducers';

const store = createStore(
  reducers,
  // default state
  {},
  compose(
    applyMiddleware(thunk)
  )
);

export default store;
