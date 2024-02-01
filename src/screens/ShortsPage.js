import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import HeaderCompo from '../components/Header';
import GenreButtons from '../components/GenreButton';

const ShortsPage = ({navigation}) => {
  return (
    <>
      <View>
        <HeaderCompo />
        <GenreButtons />
      </View>
      <View style={style.text}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home1');
          }}>
          <Text>Shorts Page</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
const style = StyleSheet.create({
  text: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

export default ShortsPage;
