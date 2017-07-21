import React, { Component } from 'react';
import { View, Platform } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { PostDetail, Header} from '../components/common';

class DetailScreen extends Component {
  static navigationOptions = {
    header: null,
  }

  render() {
    //console.log(this.props);
    // Platform.OS === 'android' ? <Header headerText={'redder'} /> : <IOSheader>
    return (


      <View>
        <Header headerText={'redder'} />
        <PostDetail post={this.props.posts1[this.props.navigation.state.params.postIndex]} />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return { posts1: state.getReddit };
};

export default connect(mapStateToProps)(DetailScreen);
