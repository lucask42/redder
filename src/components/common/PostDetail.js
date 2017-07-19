import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import { Card, CardSection } from './';


const PostDetail = ({ post }) => {
  console.log(post);
  const { title, author, thumbnail, url, ups } = post.data;
  const { thumbnailStyle,
          postContentStyle,
          thumbnailContainerStyle,
          titleTextStyle,
          authorTextStyle,
          upsStyle,
          postAttributesStyle
        } = styles;
  return (
    <Card>
      <CardSection onPress={() => Linking.openURL(url)}>
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
  }

};


export { PostDetail };
