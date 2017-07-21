import React from 'react';
import { Text, View, Image, Dimensions, Button, Linking } from 'react-native';
import { Icon } from 'react-native-elements';

import { Card, CardSection } from './';

const SCREEN_WIDTH = Dimensions.get('window').width;
const PostDetailExpand = ({ post }) => {
const { title, author, thumbnail, ups, subreddit_name_prefixed, permalink } = post.data;
const { thumbnailStyle,
        postContentStyle,
        thumbnailContainerStyle,
        titleTextStyle,
        authorTextStyle,
        upsStyle,
        postAttributesStyle,
        cardStyle,
        upsContainerStyle,
        subredditTextStyle,
        buttonStyle
      } = styles;
const openLink = () => { Linking.openURL('https://reddit.com' + permalink).catch(err => console.error('An error occurred', err)) };

return (
  <Card style={cardStyle}>
    <CardSection>
      <View style={thumbnailContainerStyle}>
        { thumbnail === 'default' ?
        <Image style={thumbnailStyle} source={require('../../assets/reddit.png')} /> :
        <Image style={thumbnailStyle} source={{ uri: thumbnail }} />
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
      <CardSection>
        <View style={buttonStyle}>
          <Button
            onPress={openLink}
            title="Read on reddit.com"
            color="#FFBAC0"
          />
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
    fontSize: 16
  },
  thumbnailStyle: {
    height: 78,
    width: 140
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  },
  authorTextStyle: {
    fontSize: 10,
    color: '#007aff'
  },
  postAttributesStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  upsStyle: {
    fontSize: 10,
    color: '#000'
  },
  cardStyle: {
    width: SCREEN_WIDTH
  },
  upsContainerStyle: {
    flexDirection: 'row'
  },
  subredditTextStyle: {
    fontSize: 10
  },
  buttonStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  }
};

export { PostDetailExpand };
