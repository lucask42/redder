import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { PostDetail } from '../components/common';

class DetailScreen extends Component {

  // if iOS
  static navigationOptions = {
    title: 'Details',
    headerLeft: ({ navigate }) => {
      return {
        left: (
          <Button
            title="Back"
            onPress={() => navigate('summary')}
            backgroundColor="rgba(0,0,0,0)"
            color="rgba(0, 122, 255, 1)"
          />
        ),
        style: {
          marginTop: Platform.OS === 'android' ? 24 : 0
        }
      };
    }
  }

  render() {
    console.log(this.props);
    return (
      <View>
        <PostDetail post={this.props.posts1[this.props.navigation.state.params.postIndex]} />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return { posts1: state.getReddit };
};

export default connect(mapStateToProps)(DetailScreen);
