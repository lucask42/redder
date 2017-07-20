//import fetch from 'isomorphic-fetch';
import axios from 'axios';
import { TEST_ACTION } from './types';

const API_URL = 'https://www.reddit.com/.json';

export function testAction() {
  return function (dispatch) {
    axios.get(`${API_URL}`)
    .then(response => {
      dispatch({
        type: TEST_ACTION,
        payload: response.data.data.children
      });
    })
    .catch((error) => {
      console.log(error);
    });
  };
}


export const selectLibrary = (libraryId) => {
  return {
    type: 'select_library',
    payload: libraryId
  };
};




// export const REQUEST_POSTS = (subreddit) => {
//   return {
//     type: 'REQUEST_POSTS',
//     payload: subreddit
//   };
// };
//
//
// export const RECEIVE_POSTS = (subreddit, json) => {
//   return {
//     type: RECEIVE_POSTS,
//     subreddit,
//     posts: json.data.children.map(child => child.data),
//     receivedAt: Date.now()
//   };
// };
//
//
//
// axios.get('https://www.reddit.com/.json')
// // .then(postsResponseToJson);
// // axios.get('https://rallycoding.herokuapp.com/api/music_albums')
// .then(response => this.setState({ posts: response.data.data.children }));


export const REQUEST_POSTS = 'REQUEST_POSTS';
function requestPosts(subreddit) {
  return {
    type: REQUEST_POSTS,
    subreddit
  };
}

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
function receivePosts(subreddit, json) {
  return {
    type: RECEIVE_POSTS,
    subreddit,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  };
}

// Meet our first thunk action creator!
// Though its insides are different, you would use it just like any other action creator:
// store.dispatch(fetchPosts('reactjs'))

export function fetchPosts(subreddit) {
  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.

  return function (dispatch) {
    // First dispatch: the app state is updated to inform
    // that the API call is starting.

    dispatch(requestPosts(subreddit));

    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.

    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.

    return fetch(`https://www.reddit.com/r/${subreddit}.json`)
      .then(
        response => response.json(),
        // Do not use catch, because that will also catch
        // any errors in the dispatch and resulting render,
        // causing a loop of 'Unexpected batch number' errors.
        // https://github.com/facebook/react/issues/6895
        error => console.log('An error occured.', error)
      )
      .then(json =>
        // We can dispatch many times!
        // Here, we update the app state with the results of the API call.

        dispatch(receivePosts(subreddit, json))
      );
  };
}
