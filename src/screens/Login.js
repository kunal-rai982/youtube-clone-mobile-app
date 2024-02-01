import React from 'react';
import {Button, Text, View} from 'react-native';

const Login = ({navigation}) => {
  return (
    <View>
      <Text>Login Page</Text>
      <Button
        title="go to home page"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};
export default Login;
