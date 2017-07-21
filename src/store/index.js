import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import reducers from '../reducers';

const store = createStore(
  reducers,
  {},
  compose(
    applyMiddleware(thunk),
    autoRehydrate()
  )
);

// store.dispatch(selectSubreddit('reactjs'));
// store
//   .dispatch(fetchPosts('reactjs'))
//   .then(() => console.log(store.getState()));
//
// persistStore(store, { storage: AsyncStorage, whitelist: ['posts1']})

export default store;
