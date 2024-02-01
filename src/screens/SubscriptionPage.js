import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import HeaderCompo from '../components/Header';
import GenreButtons from '../components/GenreButton';

const SubscriptionPage = () => {
  return (
    <>
      <View>
        <HeaderCompo />
        <GenreButtons />
      </View>
      <View style={style.text}>
        <Text>Subscription Page</Text>
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

export default SubscriptionPage;
