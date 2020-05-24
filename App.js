/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import VideoCall from './Components/VideoCall';
import {NavigationContainer} from '@react-navigation/native';
import MyNavigator from './Route';

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <MyNavigator />
    </NavigationContainer>
  );
};
export default App;
