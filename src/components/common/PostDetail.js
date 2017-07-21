import React from 'react';
import { Text, View, Image, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';

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
        //<TouchableHighlight onPress={() => navigate('detail')}>
        //</TouchableHighlight>
  return (
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
                <Text style={subredditTextStyle}>{subreddit_name_prefixed}</Text>
                <View style={upsContainerStyle}>
                  <Icon name='arrow-upward' size={10} color='#008000' />
                  <Text style={upsStyle}>{ups}</Text>
                </View>
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
