
import React, {Component, useState} from 'react'
import {
    SafeAreaView, 
    Text, 
    View,
    Image,
    TouchableOpacity,
    ImageBackground,
    FlatList,
} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
/**
 - Call API(Application Programming Interface)
 - POST, GET, PUT, DE````````````````   LETE
 - Postman(Postwoman)
 - find some public apis
 */
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer'


import UITap from './UITap'
import { Login, MainScreen } from '../screens'
import MuiltiChoice from '../screens/Muitichoice'
import ContextProvider from './Context/ContextProvider'
function AppScreen(props) {
    
    const Stack = createNativeStackNavigator()//lien ket tab
    return <ContextProvider>
    <NavigationContainer>
        <Stack.Navigator initialRouteName='MainScreen' screenOptions={{//gans manf chinhs
            headerShown: false //hiện nút back 
        }}>
            {/* <Stack.Screen name={"MainScreen"} component={MainScreen}/> */}
            <Stack.Screen name={"Login"} component={Login}/>
            <Stack.Screen name={'UITap'} component={UITap} />    
            
        </Stack.Navigator>
    </NavigationContainer>
    </ContextProvider>
}
export default AppScreen