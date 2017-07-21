import React from 'react';
import { Text, View, Platform } from 'react-native';

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
    // android status bar is 24 pixels tall
    marginTop: Platform.OS === 'android' ? 24 : 0,
    // header is overlapping with iOS status bar, too
    paddingTop: Platform.OS === 'android' ? 0 : 15,
  },
  textStyle: {
    fontSize: 40,
    // this marginBottom was added because padding the top of the header view
    // pushed the text out the bottom of the header slighly...
    marginBottom: Platform.OS === 'android' ? 0 : 5,
  }
};

export { Header };
