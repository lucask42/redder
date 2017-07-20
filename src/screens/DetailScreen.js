import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { Button } from 'react-native-elements';

class DetailScreen extends Component {

  // if iOS
  static navigationOptions = {
    title: 'Details',
    headerLeft: ({ navigate }) => {
      return {
        left: (
          <Button
            title="Back"
            onPress={() => navigate('summary')}
            backgroundColor="rgba(0,0,0,0)"
            color="rgba(0, 122, 255, 1)"
          />
        ),
        style: {
          marginTop: Platform.OS === 'android' ? 24 : 0
        }
      };
    }
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
