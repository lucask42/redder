import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { StackNavigator } from 'react-navigation';

import store from './src/store';
import SummaryScreen from './src/screens/SummaryScreen';
import DetailScreen from './src/screens/DetailScreen';

export default class App extends Component {
  render() {
    const MainNavigator = StackNavigator({
      summary: { screen: SummaryScreen },
      detail: { screen: DetailScreen }
    });


    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}
//
// <Header headerText={'redder'} />
// <PostList />
