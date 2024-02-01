import React from 'react';
import {Text, View, StyleSheet, Platform} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

const WatchPage = ({route}) => {
  const {videoId, videoTitle} = route.params;
  return (
    <View style={style.videoSelf}>
      <YoutubePlayer height={222} play={true} videoId={videoId} />
      <Text style={style.videoTitle}>{JSON.stringify(videoTitle)}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  videoTitle: {
    fontSize: 18,
    fontWeight: 700,
    marginLeft: 8,
    marginRight: 8,
    padding: 3,
  },
  videoSelf: {
    marginTop: Platform.OS === 'ios' ? 42 : 0,
  },
});
export default WatchPage;
