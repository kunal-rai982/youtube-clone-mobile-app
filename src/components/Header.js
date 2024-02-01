import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const HeaderCompo = () => {
  const navigation = useNavigation();
  return (
    <View style={style.headerContainer}>
      <Image
        source={{
          uri: 'https://cutewallpaper.org/24/youtube-logo-transparent-png/youtube-new-logo-png-image-with-transparent-background-toppng.png',
          height: 50,
          width: 90,
        }}
      />
      <View style={style.ulLiContainer}>
        <Image
          source={{
            uri: 'https://www.seekpng.com/png/detail/438-4383272_bell-comments-post-notifications-bell-icon.png',
            height: 17,
            width: 15,
          }}
        />
        <TouchableOpacity
          onPress={() => {
            navigation?.navigate('SearchInput');
          }}>
          <Image
            source={{
              uri: 'https://w7.pngwing.com/pngs/403/380/png-transparent-computer-icons-youtube-symbol-information-black-dandelion-circle-symbol-magnifying-glass-thumbnail.png',
              height: 22,
              width: 22,
            }}
          />
        </TouchableOpacity>
        <Image
          source={{
            uri: 'https://e7.pngegg.com/pngimages/424/219/png-clipart-computer-icons-youtube-business-user-google-account-youtube-purple-angle.png',
            height: 20,
            width: 20,
          }}
        />
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  headerContainer: {
    margin: 10,
    marginTop: Platform.OS === 'android' ? 1 : 35,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ulLiContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 110,
    marginTop: 9,
    padding: 10,
  },
});
export default HeaderCompo;
