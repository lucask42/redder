import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { StackNavigator } from 'react-navigation';

//import { Header, PostList } from './src/components/common';
import reducers from './src/reducers';
import SummaryScreen from './src/screens/SummaryScreen';
import DetailScreen from './src/screens/DetailScreen';

export default class App extends Component {
  render() {
    const MainNavigator = StackNavigator({
      summary: { screen: SummaryScreen },
      detail: { screen: DetailScreen }
    });

    return (
      <Provider store={createStore(reducers)}>
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
