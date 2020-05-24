import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Components/Home';
import VideoCall from './Components/VideoCall';

const Stack = createStackNavigator();

const MyNavigator = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={Home} options={{title: 'Home'}} />
    <Stack.Screen name="Meet" component={VideoCall} />
  </Stack.Navigator>
);

export default MyNavigator;
