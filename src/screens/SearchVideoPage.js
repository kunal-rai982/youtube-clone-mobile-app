import React, {useEffect, useState} from 'react';
import SearchVideoCard from '../components/SearchVideoCard';
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import HeaderCompo from '../components/Header';
import GenreButtons from '../components/GenreButton';

const SearchVideoPage = ({route, navigation}) => {
  const {searchDetail} = route.params;
  const [searchData, setSearchData] = useState([]);
  const searchResponse = async () => {
    const API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${searchDetail}&key=AIzaSyDeuqG1COjmPNA6GizV_eoiAs9Zfb7SkjY`;

    const response = await fetch(API);
    const data = await response.json();

    setSearchData(data.items);
  };
  useEffect(() => {
    searchResponse();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <SafeAreaView>
        <HeaderCompo />
        <GenreButtons />
      </SafeAreaView>
      {searchData?.length ? (
        <>
          <FlatList
            data={searchData}
            keyExtractor={item => item.etag}
            renderItem={v => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Watchpage', {
                    videoId: v?.item?.id?.videoId,
                    videoTitle: v?.item?.snippet?.title,
                  });
                }}>
                <SearchVideoCard {...v} />
              </TouchableOpacity>
            )}
          />
        </>
      ) : (
        <ActivityIndicator size={12} color="red" />
      )}

      {/* {searchData?.map(v => {
          return (
            <View key={v.etag}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Watchpage', {
                    videoId: v?.id?.videoId,
                    videoTitle: v?.snippet?.title,
                  });
                }}>
                <SearchVideoCard {...v} />
              </TouchableOpacity>
            </View>
          );
        })} */}
    </>
  );
};
export default SearchVideoPage;
