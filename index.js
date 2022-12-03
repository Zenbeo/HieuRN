import React from 'react';
// import { Text ,View } from 'react-native';
import {AppRegistry} from 'react-native';
import {AppScreen, FoodList, Login, } from './screens';
import {name as appName} from './app.json';
import HomeMain from './screens/Home/HomeMain';


AppRegistry.registerComponent(appName, () => () => <AppScreen/>);
// AppRegistry.registerComponent(appName, () => () => < FoodList/>);