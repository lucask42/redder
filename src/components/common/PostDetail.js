import React from 'react';
import { Text, View, Image, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';

import { Card, CardSection } from './';

const SCREEN_WIDTH = Dimensions.get('window').width;
const PostDetail = ({ post }) => {
const { title, author, thumbnail, ups, subreddit_name_prefixed } = post.data;
const { thumbnailStyle,
        postContentStyle,
        thumbnailContainerStyle,
        titleTextStyle,
        authorTextStyle,
        upsStyle,
        postAttributesStyle,
        cardStyle,
        upsContainerStyle,
        subredditTextStyle
      } = styles;

// below are nested ternary operators... not ideal but the posts without
// thumbnails have a thumbnail value of 'self', 'default', or 'image' instead
// of a URL.  I tried checking for a URL using RegExp but was having trouble
// catching all valid URLs.

return (
  <Card style={cardStyle}>
    <CardSection>
      <View style={thumbnailContainerStyle}>
        { thumbnail === 'self' ?
        <Image style={thumbnailStyle} source={require('../../assets/reddit.png')} /> :
        (thumbnail === 'default' ? <Image style={thumbnailStyle} source={require('../../assets/reddit.png')} /> :
        (thumbnail === 'image' ? <Image style={thumbnailStyle} source={require('../../assets/reddit.png')} /> :
        <Image style={thumbnailStyle} source={{ uri: thumbnail }} />
        ))
        }
      </View>
      <View style={postContentStyle}>
        <Text style={titleTextStyle}>{title}</Text>
          <View style={postAttributesStyle}>
            <Text style={authorTextStyle}>{author}</Text>
            <Text style={subredditTextStyle}>{subreddit_name_prefixed}</Text>
            <View style={upsContainerStyle}>
              <Icon name='arrow-upward' size={10} color='#008000' />
              <Text style={upsStyle}>{ups}</Text>
            </View>
          </View>
        </View>
      </CardSection>
    </Card>
  );
};

const styles = {
  postContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    flex: 1
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
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  upsStyle: {
    fontSize: 8,
    color: '#000'
  },
  cardStyle: {
    width: SCREEN_WIDTH
  },
  upsContainerStyle: {
    flexDirection: 'row'
  },
  subredditTextStyle: {
    fontSize: 8
  }
};


export { PostDetail };
