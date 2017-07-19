// Import libraries for making components

import React from 'react';
import { Text, View } from 'react-native';

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
    marginTop: 24
  },

  textStyle: {
    fontSize: 40

  }

};

// make the component available to other parts of the app
export { Header };
