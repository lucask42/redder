import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

class DetailScreen extends Component {

  // if iOS
  static navigationOptions = {
    title: 'Summary'

  }

  render() {
    return (
      <View>
        <Text>DetailScreen</Text>
        <Text>DetailScreen</Text>
        <Text>DetailScreen</Text>
        <Text>DetailScreen</Text>
        <Text>DetailScreen</Text>
        <Text>DetailScreen</Text>
      </View>
    );
  }
}

export default DetailScreen;
