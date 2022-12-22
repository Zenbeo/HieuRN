import React from 'react';
// import { Text ,View } from 'react-native';
import {AppRegistry} from 'react-native';
import {AppScreen, FoodList, History, Login, Processing, } from './screens';
import {name as appName} from './app.json';
import LoadingScreen from './screens/Home/LoadingScreen';


AppRegistry.registerComponent(appName, () => () => <AppScreen/>);
// AppRegistry.registerComponent(appName, () => () => < LoadingScreen/>);