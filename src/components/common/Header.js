// Import libraries for making components

import React from 'react';
import { Text, View, Platform } from 'react-native';

// Make a component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#FFC0CB',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    // status bar is 24 pixels tall
    marginTop: Platform.OS === 'android' ? 24 : 0,
    paddingTop: Platform.OS === 'android' ? 0 : 15,
  },

  textStyle: {
    fontSize: 40,
    marginBottom: Platform.OS === 'android' ? 0 : 5,

  }

};

// make the component available to other parts of the app
export { Header };
