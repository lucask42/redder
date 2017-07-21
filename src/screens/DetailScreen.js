import React, { Component } from 'react';
import { View, Platform } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { PostDetailExpand, Header} from '../components/common';

class DetailScreen extends Component {
  static navigationOptions = {
    header: null,
  }

  render() {
    return (
      <View>
        <Header headerText={'redder'} />
        <PostDetailExpand post={this.props.posts1[this.props.navigation.state.params.postIndex]} />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return { posts1: state.getReddit };
};

export default connect(mapStateToProps)(DetailScreen);
