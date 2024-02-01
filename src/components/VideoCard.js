import React from 'react';
import {Image, View, StyleSheet, Text, Platform} from 'react-native';

const VideoCard = props => {
  // const viewCountDisplay = count => {
  //   let number = parseInt(count)

  //   if (count.length <= 3) {
  //     return count;
  //   } else if (count.length <= 6) {
  //     return count.slice(0, -3) + 'k';
  //   } else if (count.length <= 9) {
  //     return count.slice(0, -6) + 'M';
  //   }
  // };
  const viewCountDisplay = count => {
    if (count.length <= 3) {
      return count;
    } else if (count.length <= 6) {
      return count.slice(0, -3) + 'k';
    } else if (count.length <= 9) {
      let vo = parseInt(count);
      vo = vo / 1000000;
      let counti = new String(vo);
      return counti.slice(0, -5) + 'M';
    }
  };
  return (
    <View style={style.card}>
      <Image
        source={{
          uri:
            props?.snippet?.thumbnails?.maxres?.url ??
            'https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg',
          height: 220,
          width: Platform.OS === 'ios' ? 390 : 415,
        }}
      />
      <Text style={style.videoTitle}>{props?.snippet?.title}</Text>
      <Text style={style.channelName}>
        {props?.snippet?.channelTitle}{' '}
        {viewCountDisplay(props?.statistics?.viewCount)} Views
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
export default VideoCard;
