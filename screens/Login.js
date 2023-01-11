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
import React, {useState, useEffect, useRef} from 'react';
const screenWidth = Dimensions.get('screen').width;
import AsyncStorage from '@react-native-async-storage/async-storage';
import {colors} from '../constaints/colors';
import { fontSize, images } from '../constaints';

export default function Login({navigation, listAccount, route}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
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

 const inputRef = useRef()

 React.useEffect(()=>{
  inputRef.current.focus();
}, []);

const onLogins= () => {
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
}
  return (
    <View style={styles.container}>
       <View style={styles.ViewBackground}>
        <View style={{flexDirection:'column'}}>
        <Text style={styles.TextTitle}>Hello </Text>
        <Text style={styles.TextTitle}>Coffee Family </Text>
        </View>
        <Image
          tintColor="blue" //màu icons
          source={images.computers}
          style={styles.Image}
        />
      </View>
      <View style={{margin: 20}} />
      <View style={styles.body}>
        

        <View style={styles.containerInput}>
        <Text style={styles.titleName}>Tài khoản</Text>
          <TextInput
          ref={inputRef}
            placeholder={'Tài khoản'}
            value={username}
            onChangeText={text => setUsername(text)}
            style={styles.styleMB20}
          />
          <View style={{ borderWidth:0.2,marginBottom:10}}/>
          <Text style={styles.titleName}>Mật khẩu</Text>
          <TextInput
            secureTextEntry={true}
            value={password}
            onChangeText={text => setPassword(text)}
            placeholder={'Mật khẩu'}
            style={styles.styleMB20}
          />
          <View style={{ borderWidth:0.2}}/>
          {isErrorWrongUsernameOrPass && (
            <Text style={[styles.textErr, styles.styleMB30]}>
              Tài khoản hoặc mật khẩu không đúng
            </Text>
          )}
        </View>
        <View
          style={{ 
            justifyContent: 'center',
            alignItems:'center',
            marginTop:50
          }}>
            <TouchableOpacity
        style={styles.buttonLogin}
          onPress={onLogins}
        >
          <Text style={styles.textLogin}>Đăng nhập</Text>
        </TouchableOpacity>
          <Text
            onPress={() => {
              navigation.navigate('Register');
            }}
            style={{textAlign: 'right',fontSize:15,borderBottomWidth:1,paddingTop:10}}>
            Đăng ký
          </Text>
        </View>
        <View style={{height:350}}/>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
 
    backgroundColor: colors.white,
  },
  ViewBackground: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: colors.Orgent,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    height:260
  },

  TextTitle: {
    fontSize: 30,
    color: 'blue',
   paddingLeft:15,
   fontWeight:'bold'
  },
  Image: {
    height: 150,
    width: 150,
    fontWeight: 'bold',
    // backgroundColor: 'blue',
    alignSelf: 'center',
    marginRight:15
  },
  styleMB30: {
    marginBottom: 30,
  },
  containerInput: {
    justifyContent: 'center',
    height: 150,
    width: '100%',
    // borderWidth: 1,
    borderRadius: 10,
    marginTop:20
  },
  styleMB20: {
    marginBottom: -10,
    
  },
  body: {
    marginLeft:10,
    marginTop:-30
  },
  textSignIn: {
    fontWeight: '700',
    fontSize: 24,
    marginBottom: 30,
    color: 'black',
  },
  titleName: {
    color: 'blue',
    fontSize: fontSize.h4,
    fontWeight: '600',

  },
  textErr: {
    fontSize: 14,
    color: 'red',
  },
  buttonLogin:{
    height:45,
    width:'80%',
    backgroundColor:colors.bluesky,
    justifyContent:'center',
    borderRadius:20,

  },
  textLogin:{
alignSelf:'center',
fontSize:15,
color:colors.white
  }
});
