import React, { Component } from 'react';
import { View, Platform } from 'react-native';
import { connect } from 'react-redux';
import { PostDetailExpand, Header } from '../components/common';

class DetailScreen extends Component {
  static navigationOptions = {
    header: (Platform.OS === 'android' ? null : undefined)
  }

  render() {
    return (
      <View>
        { Platform.OS === 'android' && <Header headerText={'redder'} /> }
        <PostDetailExpand post={this.props.posts1[this.props.navigation.state.params.postIndex]} />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return { posts1: state.getReddit };
};

export default connect(mapStateToProps)(DetailScreen);
