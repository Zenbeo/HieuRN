/**
yarn add react-navigation
yarn add react-native-safe-area-context
yarn add @react-navigation/bottom-tabs
yarn add @react-navigation/native
yarn add @react-navigation/native-stack
yarn add @react-navigation/drawer
yarn add react-native-gesture-handler 
yarn add react-native-reanimated
 */
import * as React from 'react';
import {
  Settings,
  ProductGridView,
  FoodList,
  Profile,
  Chat,
  Muitichoice,
  SettingFList,
} from '../screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {colors} from '../constaints/colors';
import {Image} from 'react-native';
import {fontSize, icons} from '../constaints';
import Order from '../screens/Order/Order';
import History from '../screens/Order/History';
import Processing from '../screens/Order/Processing';
// import {colors,fontSize} from '../constaints'
const Tab = createBottomTabNavigator();
const screenOptions = ({route}) => ({
  headerShown: false,
  tabBarActiveTintColor: colors.Orgent,
  // tabBarActiveTintColor:colors.Orgent,
  tabBarInactiveTintColor: colors.Orgent,
  tabBarIcon: ({focused, name, color}) => {
    let screemName = route.name;
    let iconName = '';
    if (screemName == 'ProductGridView') {
      iconName = icons.electricity;
    } else if (screemName == 'FoodList') {
      iconName = icons.food;
    } else if (screemName == 'SettingFList') {
      iconName = icons.settings;
    }
    return (
      //chỉ dùng dk 1 image
      <Image
        style={{
          marginStart: 10,
          marginEnd: 5,
          width: 30,
          height: 30,
          tintColor: focused ? 'red' : 'blue',
        }}
        source={iconName}
      />
    );
  },
}); //la function
function UITap(props) {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name={'FoodList'} component={FoodList} />
      <Tab.Screen name={'History'} component={History} />
      <Tab.Screen name={'ProductGridView'} component={ProductGridView} />
      <Tab.Screen name={'SettingFList'} component={SettingFList} />
      <Tab.Screen name="Processing" component={Processing} />
    </Tab.Navigator>
  );
}
export default UITap;
