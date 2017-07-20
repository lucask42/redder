import React, { Component } from 'react';
import { View, ScrollView, Navigator } from 'react-native';
import axios from 'axios';

import { Header, PostDetail } from '../components/common';

class SummaryScreen extends Component {
  static navigationOptions = {
    header: null,
  }
  state = { posts: [] };

//
componentWillMount() {
  axios.get('https://www.reddit.com/.json')
  .then(response => this.setState({ posts: response.data.data.children }));
}
renderPosts() {
  return this.state.posts.map(post =>
    <PostDetail key={post.data.subreddit_id} post={post} />
  );
}
  render() {
    //const { navigate } = this.props.navigation;
    return (
      <View>
        <Header headerText={'redder'} />
        <ScrollView>
          {this.renderPosts()}
        </ScrollView>
      </View>
    );
  }
}
// headerRight: <Text>goright</Text>
//
// <TouchableOpacity onPress={() => navigate('detail')}>
//
// </TouchableOpacity>

export default SummaryScreen;
