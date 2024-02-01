import {View, ScrollView, TouchableOpacity} from 'react-native';
import HeaderCompo from '../components/Header';
import GenreButtons from '../components/GenreButton';
import {YOUTUBE_API} from '../utils/constants';
import VideoCard from '../components/VideoCard';
import React, {useEffect, useState} from 'react';
const Home = ({navigation}) => {
  const [videoDetail, setVideoDetail] = useState([]);
  const videoDetails = async () => {
    const response = await fetch(YOUTUBE_API);
    const data = await response.json();

    setVideoDetail(data?.items);
  };
  useEffect(() => {
    videoDetails();
  }, []);
  return (
    <ScrollView>
      <HeaderCompo />
      <GenreButtons />
      {videoDetail?.map(v => {
        return (
          <View key={v.id}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Watchpage', {
                  videoId: v.id,
                  videoTitle: v.snippet.title,
                });
              }}>
              <VideoCard {...v} />
            </TouchableOpacity>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default Home;
