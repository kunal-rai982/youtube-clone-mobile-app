import React from 'react';
import {Image, View, StyleSheet, Text, Platform} from 'react-native';

const SearchVideoCard = props => {
  return (
    <View style={style.card}>
      <Image
        source={{
          uri:
            props?.item?.snippet?.thumbnails?.high?.url ??
            'https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg',
          height: 220,
          width: Platform.OS === 'ios' ? 390 : 415,
        }}
      />
      <Text style={style.videoTitle}>{props?.item?.snippet?.title}</Text>
      <Text style={style.channelName}>
        {props?.item?.snippet?.channelTitle}
      </Text>
    </View>
  );
};

const style = StyleSheet.create({
  card: {
    marginTop: 6,
  },
  videoTitle: {
    fontSize: 18,
    marginLeft: 15,
    marginRight: 15,
    fontWeight: 700,
    padding: 3,
  },
  channelName: {
    marginLeft: 15,
    margin: 2,
    fontWeight: 300,
  },
});
export default SearchVideoCard;
