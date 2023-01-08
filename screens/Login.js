/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  StyleSheet,
  Alert,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';
import React, {useState, useEffect} from 'react';
const screenWidth = Dimensions.get('screen').width;

// import TextInput from '../components/TextInput';
// import ButtonCommon from '../components/ButtonCommon';
// import Footer from '../screens/Footer';
// import Header from '../components/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({navigation, listAccount,route}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState("");
  const [checkButtonLogin, setCheckButtonLogin] = useState(true);
  const [isErrorWrongUsernameOrPass, setIsErrorWrongUsernameOrPass] =
    useState(false);
  useEffect(() => {
    if (username.length > 5 && password.length > 5) {
      setCheckButtonLogin(false);
    } else {
      setCheckButtonLogin(true);
    }
    setIsErrorWrongUsernameOrPass(false);
  }, [username, password]);

  useEffect(() => {
    // Alert.alert('Welcome back');
  }, []);

  return (
    <View style={styles.container}>
      <View style={{width: '100%'}}>
        <TouchableOpacity
          style={{marginHorizontal: 42.5, marginVertical: 20}}
          onPress={() => navigation.goBack()}>
          {/* <Image
            style={{width: 25, height: 30}}
            source={require('../assets/images/back.png')}
          /> */}
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <Text style={styles.textSignIn}>Sign In</Text>
        <TextInput
          placeholder={'Username'}
          value={username}

          onChangeText={text => setUsername(text)}
          // customStyle={styles.styleMB20}
        />
        <TextInput
          secureTextEntry={true}
          value={password}
          onChangeText={text => setPassword(text)}
          placeholder={'Password'}
          // customStyle={
          //   isErrorWrongUsernameOrPass ? {marginBottom: 10} : styles.styleMB30
          // }
        />
        {isErrorWrongUsernameOrPass && (
          <Text style={[styles.textErr, styles.styleMB30]}>
            Username or password is not correct
          </Text>
        )}
        <Button
          title={'Sign In'}
          // disabled={checkButtonLogin}
          onPress={() => {
            AsyncStorage.getItem('account').then(accounts => {
              const listAccount = JSON.parse(accounts);
              console.log('LOG IN' + JSON.stringify(listAccount));
              const check = listAccount.some(
                item => item.username == username && item.password == password,
              );
              // check login dung hay sai

              if (check) {
                AsyncStorage.setItem('user', username);
                // AsyncStorage.setItem('pass', password);
                navigation.navigate('HomeMain', {         
// screen: 'Profile',
                  // params: { username: username  },
                });
              } else {
                setIsErrorWrongUsernameOrPass(true);
              }
            });
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}>
          <Text
            onPress={() => {
              navigation.navigate('Register');
            }}
            style={{textAlign: 'right'}}>
            Sign up
          </Text>
        </View>
      </View>
      {/* <Footer /> */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  styleMB30: {
    marginBottom: 30,
  },
  styleMB20: {
    marginBottom: 20,
  },
  body: {
    width: screenWidth - 60,
  },
  textSignIn: {
    fontWeight: '700',
    fontSize: 24,
    marginBottom: 30,
    color: 'black',
  },
  textErr: {
    fontSize: 14,
    color: 'red',
  },
});