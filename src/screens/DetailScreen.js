import React, { Component } from 'react';
import { View, Platform } from 'react-native';
import { connect } from 'react-redux';
import { PostDetailExpand, Header } from '../components/common';

class DetailScreen extends Component {
  // this navigationOptions was a little tricky.  react-navigation will stick
  // a navigation header at the top of the screen because this screen is
  // specified in App.js under MainNavigator.  However the header looks awful
  // on Android but is useful on iOS.  After trying several methods to get
  // conditional rendering for this header this is the workaround I found.
  // tldr:
  // Setting header to null suppresses the header, while undefined doesn't.
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
