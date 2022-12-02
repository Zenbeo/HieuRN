// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UITab from './UITap';
import HomeMain from '../screens/Home/HomeMain';

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName='HomeMain'  screenOptions={{headerShown:false}}>
      <Stack.Screen name="HomeMain" component={HomeMain} />
        <Stack.Screen name="UITab" component={UITab} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

export default Navigation;
