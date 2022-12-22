import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FoodList, History, HomeMain, Login, Processing, Table } from '../screens';
import ContextProvider from './Context/ContextProvider';
import CartScreen from '../screens/Cart/CartScreen';
import Register from '../screens/Register/Register';
import LoadingScreen from '../screens/Home/LoadingScreen';
import ProductDetails from '../screens/Foodlist/ProductDetails';
const Stack = createNativeStackNavigator();

export default function AppScreen() {
  // const user = React.useContext(ContextProvider);

  // React.useEffect(() => {
  //   AsyncStorage.getItem('userName')
  //     .then(value => {
  //       console.log(value);
  //       user.setUser({
  //         name: value,
  //         password: '',
  //       });
  //     })
  //     .catch(e => console.log(e));
  // }, []);

  return (
    <ContextProvider>
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Login'>
   {/* {!user?.user?.name ? ( */}
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
        {/* ) : (
            <> */}
            
               <Stack.Screen
            name="LoadingScreen"
            component={LoadingScreen}
            options={{headerShown: false}}
          />
           <Stack.Screen
            name="HomeMain"
            component={HomeMain}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="History"
            component={History}
            options={{headerShown: false}}
          />
           <Stack.Screen
            name="Processing"
            component={Processing}
            options={{headerShown: false}}
          />
        
          <Stack.Screen
            name="CartScreen"
            component={CartScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Table"
            component={Table}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="FoodList"
            component={FoodList}
            options={{headerShown: false}}
          />
           <Stack.Screen
            name="ProductDetails"
            component={ProductDetails}
            options={{headerShown: false}}
          />
             {/* </>
             
          )} */}
           <Stack.Screen
            name="Register"
            component={Register}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
      </ContextProvider>
  )
}