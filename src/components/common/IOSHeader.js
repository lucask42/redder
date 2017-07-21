import React from 'react';
import { NavigatorIOS } from 'react-native';

export class NavigatorIOSApp extends React.Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: MyScene,
          title: 'My Initial Scene',
          barTintColor: '#FFC0CB'
        }}
        style={{ flex: 1 }}
      />
    );
  }
}

export { IOSHeader };
