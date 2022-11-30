import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {images, icons, fontSize} from '../constaints';
import {isValidEmail, isValidPassword} from '../utilies/validations';

function Profile(props) {
  return <SafeAreaView style={{
    flex:1,
    backgroundColor:'green',
    
  }}><Text>This is profile</Text></SafeAreaView>;
}
export default Profile;