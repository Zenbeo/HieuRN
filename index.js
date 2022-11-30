import React from 'react';
// import { Text ,View } from 'react-native';
import {AppRegistry} from 'react-native';
import {MainScreen,Login, AppScreen, } from './screens';
import {name as appName} from './app.json';
import FoodList from './screens/Foodlist/FoodList';
import ProductGridView from './screens/ProductGrid/ProductGridView';
import Settings from './screens/SettingRN/Settings'
import SettingFList from './screens/SettingRN/SettingFList'
import UITap from './navigation/UITap';
import MuiltiChoice from './screens/Muitichoice';
//AppRegistry.registerComponent(appName, () => () => <MainScreen />);
//AppRegistry.registerComponent(appName, () => () => <Login />);
//AppRegistry.registerComponent(appName, () => () => <FoodList />);
//AppRegistry.registerComponent(appName, () => () => <ProductGridView />);
// AppRegistry.registerComponent(appName, () => () => < Settings/>);
AppRegistry.registerComponent(appName, () => () => <AppScreen/>);
// AppRegistry.registerComponent(appName, () => () => < MuiltiChoice/>);