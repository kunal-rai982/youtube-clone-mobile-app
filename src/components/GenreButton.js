import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
const GenreButtons = () => {
  return (
    <View style={style.ButtonContainer}>
      {/* <Button
          onPress={() => Alert.alert('Simple Button pressed')}
          style={style.Buttons}
          title="Cricket"
        />
        <Button color="#ff5c5c" backgroundColor="grey" title="Live" />
        <Button style={style.Buttons} title="News" />
        <Button style={style.Buttons} title="Movies" /> */}
      <TouchableOpacity style={style.Buttons}>
        <Text>Live</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.Buttons}>
        <Text>Cricket</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.Buttons}>
        <Text>Movies</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.Buttons}>
        <Text>News</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.Buttons}>
        <Text>Gaming</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.Buttons}>
        <Text>Music</Text>
      </TouchableOpacity>
    </View>
  );
};
const style = StyleSheet.create({
  ButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 2,
    padding: 5,
  },
  Buttons: {
    backgroundColor: 'lightgrey',
    borderRadius: 6,
    border: 1,
    width: 53,
    height: 20,
    alignItems: 'center',
  },
});
export default GenreButtons;
