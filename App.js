import React, { Component } from 'react';
//why don't/can't I use AppRegistry
import { View } from 'react-native';
import Header from './src/components/Header';
import PostList from './src/components/PostList';
import PostDetail from './src/components/PostDetail';

export default class App extends Component {
  render() {
    return (
      <View>
        <Header headerText={'redder'} />
        <PostList />
      </View>

    );
  }
}
