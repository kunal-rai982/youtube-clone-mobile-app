import React, {useState} from 'react';
import {
  View,
  Image,
  TextInput,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from 'react-native';
const SearchInput = ({navigation}) => {
  const [input, setInput] = useState('');

  const searchResponse = () => {
    navigation.navigate('SearchVideo', {
      searchDetail: input,
    });
  };
  return (
    <>
      <View style={style.searchContainer}>
        <TextInput
          style={style.inputBox}
          onChangeText={text => setInput(text)}
          value={input}
          placeholder=" Search YouTube"
          keyboardType="web-search"
        />
        <TouchableOpacity onPress={() => searchResponse()}>
          <Image
            source={{
              uri: 'https://w7.pngwing.com/pngs/403/380/png-transparent-computer-icons-youtube-symbol-information-black-dandelion-circle-symbol-magnifying-glass-thumbnail.png',
              height: 35,
              width: 30,
            }}
            style={style.searchIcon}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  inputBox: {
    // marginTop: Platform.OS === 'ios' ? 45 : 10,
    backgroundColor: 'lightgrey',
    borderRadius: 30,
    margin: 5,
    padding: Platform.OS === 'android' ? 4 : 10,
    width: 250,
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: Platform.OS === 'ios' ? 45 : 10,
  },
  searchIcon: {
    marginTop: Platform.OS === 'ios' ? 6 : 8,
  },
});
export default SearchInput;
