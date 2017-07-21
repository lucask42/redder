import React, { Component } from 'react';
import { NavigatorIOS, View } from 'react-native';

class IOSHeader extends Component {
  render() {
    return (
      <View>
        <NavigatorIOS
          initialRoute={{
            component: 'detail',
            title: 'My Initial Scene',
            barTintColor: '#FFC0CB'
          }}
          style={{ flex: 1 }}
        />
      </View>
    );
  }
}

export { IOSHeader };
