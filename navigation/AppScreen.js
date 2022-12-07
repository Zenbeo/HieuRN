// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UITap from './UITap';
import HomeMain from '../screens/Home/HomeMain';
import {History, Login, Processing} from '../screens';

const Stack = createNativeStackNavigator();

function AppScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName=""
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="HomeMain" component={HomeMain} />
        <Stack.Screen name="UITap" component={UITap} />
        <Stack.Screen name="History" component={History} />
        <Stack.Screen name="Processing" component={Processing} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default AppScreen;
