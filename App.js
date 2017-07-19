import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { Header, PostList } from './src/components/common';
import reducers from './src/reducers';
import LibraryList from './src/components/LibraryList';

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={{ flex: 1 }}>
          <Header headerText={'redder'} />
          <LibraryList />
        </View>
      </Provider>
    );
  }
}


//
//<PostList />
