import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  FoodList,
  History,
  HomeMain,
  Login,
  Processing,
  Table,
} from '../screens';
import CartScreen from '../screens/Cart/CartScreen';
import Register from '../screens/Register/Register';
import LoadingScreen from '../screens/Home/LoadingScreen';
import ProductDetails from '../screens/Foodlist/ProductDetails';
import {combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';
import authReducers from '../redux/reducer/authReducers';
import categoryReducer from '../redux/reducer/categoryReducer';

const Stack = createNativeStackNavigator();

const rootReducer = combineReducers({
  auths: authReducers, //tham chiếu đến Reducer
  categorys : categoryReducer
});
const store = createStore(rootReducer);

export default function AppScreen() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />

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
          <Stack.Screen
            name="Register"
            component={Register}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
