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
    //.then(() => {
    this.setState({ refreshing: false });
    //});
  }
  renderPosts() {
    //console.log(this.props);
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
    //const { navigate } = this.props.navigation;
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
// headerRight: <Text>goright</Text>
//
// <TouchableOpacity onPress={() => navigate('detail')}>
//
// </TouchableOpacity>

const mapDispatchToProps = (dispatch) => {
  return { getReddit() {
    axios.get('https://www.reddit.com/.json')
    //.then(response => this.setState({ posts: response.data.data.children }));
    .then(response => {
      dispatch({ type: 'GET_REDDIT', data: response.data.data.children });
    });
  } };
};

const mapStateToProps = state => {
  return { posts1: state.getReddit };
};

export default connect(mapStateToProps, mapDispatchToProps)(SummaryScreen);
