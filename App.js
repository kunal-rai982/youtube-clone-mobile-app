import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import React from 'react';
import Home from './src/screens/Home';
import HeaderCompo from './src/components/Header';
import SearchInput from './src/screens/SearchInputPage';
import WatchPage from './src/screens/WatchPage';
import ShortsPage from './src/screens/ShortsPage';
import SearchVideoPage from './src/screens/SearchVideoPage';
import SubscriptionPage from './src/screens/SubscriptionPage';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const StackScreen = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home1" component={Home} />
      <Stack.Screen name="Watchpage" component={WatchPage} />
      <Stack.Screen name="HeaderCompo" component={HeaderCompo} />
      <Stack.Screen name="SearchInput" component={SearchInput} />
      <Stack.Screen name="SearchVideo" component={SearchVideoPage} />
    </Stack.Navigator>
  );
};

const ShortStackScreen = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="short" component={ShortsPage} />
      <Stack.Screen name="Home1" component={Home} />

      {/* <Stack.Screen name="SearchInput" component={SearchInput} /> */}
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen
          name="Home"
          component={StackScreen}
          options={{
            tabBarIcon: () => (
              <Image
                source={{
                  uri: 'https://e7.pngegg.com/pngimages/567/773/png-clipart-computer-icons-home-black-home-icon-miscellaneous-angle-thumbnail.png',
                }}
                style={{width: 26, height: 26}}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Shorts"
          component={ShortStackScreen}
          options={{
            tabBarIcon: () => (
              <Image
                source={{
                  uri: 'https://static.wikia.nocookie.net/logopedia/images/4/4e/YouTube_Shorts_%28Outline%29.svg/revision/latest/scale-to-width-down/250?cb=20221201213331',
                }}
                style={{width: 20, height: 26}}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Subscription"
          component={SubscriptionPage}
          options={{
            tabBarIcon: () => (
              <Image
                source={{
                  uri: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/video-library-2984199-2480120.png',
                }}
                style={{width: 20, height: 26}}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

// const App = () => {
//   return(
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{headerShown:false}}>
//         <Stack.Screen name="TabNavigator" component={TabNavigator} />
//         <Stack.Screen name="Home" component={Home} />
//         <Stack.Screen name="Watchpage" component={WatchPage} />
//       </Stack.Navigator>
//     </NavigationContainer>)
// };

export default App;

// const TabNavigator = ()=>{
//   return(

//       <Tab.Navigator screenOptions={{headerShown:false}}>
//         <Tab.Screen name="Home" component={Home}/>
//         <Tab.Screen name='Subscription' component={SubscriptionPage}/>
//       <Tab.Screen name='Shorts' component={ShortsPage}/>
//       </Tab.Navigator>

//   )
// }
