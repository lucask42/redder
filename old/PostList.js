import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import { PostDetail } from './';

class PostList extends Component {
  state = { posts: [] };

  componentWillMount() {
    axios.get('https://www.reddit.com/.json')
    .then(response => this.setState({ posts: response.data.data.children }));
  }

  // postsResponseToJson(response) {
  //   return response.json()
  //   .then((responseJson) => responseJson.data.children.map(c => c.data));
  // }

  renderPosts() {
    return this.state.posts.map(post =>
      <PostDetail key={post.data.subreddit_id} post={post} onPress={() =>
        navigate('detail', { post })}
      />
    );
  }

  render() {
    return (

    );
  }

}

export { PostList };
