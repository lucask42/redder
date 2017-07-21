import React, { Component } from 'react';
import { View, ScrollView, TouchableHighlight, RefreshControl } from 'react-native';
import axios from 'axios';
import { connect } from 'react-redux';

import { Header, PostDetail } from '../components/common';

class SummaryScreen extends Component {
  static navigationOptions = {
    header: null,
  }
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
    };
  }
  componentWillMount() {
    this.props.getReddit();
  }
  onRefresh() {
    this.setState({ refreshing: true });
    this.props.getReddit();
    this.setState({ refreshing: false });
  }
  renderPosts() {
    return this.props.posts1.map((post, index) =>
      <TouchableHighlight
        key={index}
        onPress={() => {
        this.props.navigation.navigate('detail', { postIndex: index });
        }}
      >
        <View>
          <PostDetail post={post} />
        </View>
      </TouchableHighlight>
    );
  }
  render() {
    return (
      <View>
        <Header headerText={'redder'} />
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.onRefresh.bind(this)}
            />
          }
        >
          {this.renderPosts()}
        </ScrollView>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return { getReddit() {
    axios.get('https://www.reddit.com/.json')
    .then(response => {
      dispatch({ type: 'GET_REDDIT', data: response.data.data.children });
    });
  } };
};

const mapStateToProps = state => {
  return { posts1: state.getReddit };
};

export default connect(mapStateToProps, mapDispatchToProps)(SummaryScreen);
