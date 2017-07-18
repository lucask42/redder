import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import PostDetail from './PostDetail';

class PostList extends Component {
  state = { posts: [] };

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => this.setState({ posts: response.data }));
  }

  renderPosts() {
    return this.state.posts.map(post =>
//update this with a more appropriate id # for posts
      <PostDetail key={post.title} />
    );
  }

  render() {
    console.log(this.state);
    return (
      <View>
        {this.renderPosts()}
      </View>
    );
  }

}

export default PostList;
