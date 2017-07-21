import React, { Component } from 'react';
import { View, Platform, NavigatorIOS } from 'react-native';
import { connect } from 'react-redux';
import { PostDetailExpand, Header} from '../components/common';

class DetailScreen extends Component {
  static navigationOptions = {
    header: null,
  }

  render() {
    return (
      <View>
        { Platform.OS === 'android' ? <Header headerText={'redder'} /> :
        <NavigatorIOS initialRoute={{ title: 'Scene', }} style={{ flex: 1 }} /> }
        <PostDetailExpand post={this.props.posts1[this.props.navigation.state.params.postIndex]} />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return { posts1: state.getReddit };
};

export default connect(mapStateToProps)(DetailScreen);
