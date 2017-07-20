import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import { PostDetail } from './';

class PostList extends Component {
  onPostSelect = () => {
    //this.props.nagivation.navigate('detail')
  }
  state = { posts: [] };

  componentWillMount() {
    axios.get('https://www.reddit.com/.json')
    // .then(postsResponseToJson);
    // axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => this.setState({ posts: response.data.data.children }));
  }

  // postsResponseToJson(response) {
  //   return response.json()
  //   .then((responseJson) => responseJson.data.children.map(c => c.data));
  // }

  renderPosts() {
    return this.state.posts.map(post =>
      <PostDetail key={post.data.subreddit_id} post={post} onTouch={this.onPostSelect} />
    );
  }

  render() {
    return (
      <ScrollView>
        {this.renderPosts()}
      </ScrollView>
    );
  }

}

export { PostList };
