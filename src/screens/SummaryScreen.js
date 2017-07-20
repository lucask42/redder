import React, { Component } from 'react';
import { View, Text, Platform, TouchableOpacity } from 'react-native';
import { Header, PostList } from '../components/common';



class SummaryScreen extends Component {
  static navigationOptions = {
    header: null,
  }

//



  render() {
    return (
      <View>
        <Header headerText={'redder'} />
        <PostList />
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
