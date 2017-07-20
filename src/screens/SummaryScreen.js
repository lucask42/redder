import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class SummaryScreen extends Component {
  static navigationOptions = {
    title: 'Summary'

  }

// success, this button navigates to another screen
  render() {
      const { navigate } = this.props.navigation;
      return (
        <View>
          <Text>PLACEHOLDER TEXT</Text>
          <Button
            onPress={() => navigate('detail')}
            title="Go To Detail Screen"
          />
        </View>
      );
  }
}

export default SummaryScreen;
