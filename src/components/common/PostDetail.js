import React from 'react';
import { Text, View, Image, TouchableHighlight, Dimensions } from 'react-native';
import { Card, CardSection } from './';

const SCREEN_WIDTH = Dimensions.get('window').width;

const PostDetail = ({ post }) => {

  // console.log(post);
  // const { navigate } = this.props.navigation;
  //
  // <Button
  //   onPress={() => navigate('detail')}
  //   title="Go To Detail Screen"
  // />
  const { title, author, thumbnail, ups } = post.data;
  const { thumbnailStyle,
          postContentStyle,
          thumbnailContainerStyle,
          titleTextStyle,
          authorTextStyle,
          upsStyle,
          postAttributesStyle,
          cardStyle
        } = styles;
        //<TouchableHighlight onPress={() => navigate('detail')}>
        //</TouchableHighlight>
  return (
// <TouchableHighlight onPress={this.props.onTouch} >
      <Card style={cardStyle}>
        <CardSection>
          <View style={thumbnailContainerStyle}>
            <Image
              style={thumbnailStyle}
              source={{ uri: thumbnail }}
            />
          </View>
          <View style={postContentStyle}>
            <Text style={titleTextStyle}>{title}</Text>
              <View style={postAttributesStyle}>
                <Text style={authorTextStyle}>{author}</Text>

                <Text style={upsStyle}>{ups}</Text>
              </View>

          </View>
        </CardSection>
      </Card>
// </TouchableHighlight>
  );
};

const styles = {
  postContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  titleTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 39,
    width: 70
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  },
  authorTextStyle: {
    fontSize: 8,
    color: '#007aff'
  },
  postAttributesStyle: {
    flexDirection: 'row'
  },
  upsStyle: {
    fontSize: 8,
    color: '#000'
  },
  cardStyle: {
    width: SCREEN_WIDTH
  }

};


export { PostDetail };
