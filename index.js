import React from 'react';
import { AppRegistry } from 'react-native'
import App from './App';
import {name as appName} from './app.json';
// import { Text ,View } from 'react-native';
// import {AppRegistry} from 'react-native';
import {AppScreen, FoodList, History, HomeMain, Login, Processing, } from './screens';
// import InserCart from './screens/Cart/InserCart';
// import LoadingScreen from './screens/Home/LoadingScreen';

// 
AppRegistry.registerComponent(appName, () => () => <AppScreen/>);
// AppRegistry.registerComponent(appName, () => () => < InserCart/>);