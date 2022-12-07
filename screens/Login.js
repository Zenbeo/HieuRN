import React, {useState, useEffect, useContext} from 'react';
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
  StyleSheet,
  Dimensions
} from 'react-native';

import {UIHearder} from '../Button';
import {images, icons, fontSize} from '../constaints';
import {colors} from '../constaints/colors';
import ContextProvider from '../navigation/Context/ContextProvider';
import UITap from '../navigation/UITap';
import {isValidEmail, isValidPassword} from '../utilies/validations';
import HomeMain from './Home/HomeMain';

function Login({navigation}) {
  //navigation
  // const {navigation, rount} = props;
  // //function of navigate to/back
  // const {navigate, goBack} = navigation;

  //state
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassWord] = useState('');
  //state email/pass
  const [email, setEmail] = useState('');
  const [password, setPassWord] = useState('');

  const [keyboardIsShow, setKeyboardIsShow] = useState(false);
  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardIsShow(true);
    });
    Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardIsShow(false);
    });
  });

  const user = useContext(ContextProvider);
  console.log(user);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{
        flex: 100,
        // flexDirection:'row',
        backgroundColor: 'white',

      }}>
        
      <View
      style={styles.ViewBackground}
      >
        {/* <Text style={styles.TextBackground}>ĐẶT ĐỒ UỐNG </Text> */}
        <Image
          tintColor="blue" //màu icons
          source={images.computers}
          style={styles.Image}
        />
        
      </View>
      <View style={{ margin:20}}/>
      <View
        style={{
          flex: 30,
        }}>
        <View
          style={{
            marginHorizontal: 15,
          }}>
          <Text
            style={{
              color: 'blue',
              fontSize: fontSize.h4,
              //fontWeight: 'bold',
            }}>
            Email:{' '}
          </Text>
          <TextInput
            onChangeText={text => {
              setErrorEmail(
                isValidEmail(text) == true ? '' : 'Email not in corect format',
              );
              setEmail(text);
            }}
            style={{
              color: 'black',
            }}
            placeholder="example@gmail.com"
            placeholderTextColor={'rgba(0,0,0,0.6)'}
            value={'hieu@gmail.com'}
            // value={email}
          />
          <View style={styles.ViewEmail} />
          <Text style={styles.ErrorText}>{errorEmail}</Text>
        </View>
        <View
          style={{
            marginHorizontal: 15,
          }}>
          <Text
            style={{
              color: 'blue',
              fontSize: fontSize.h4,
              // fontWeight: 'bold',
            }}>
            Password:{' '}
          </Text>
          <TextInput
            onChangeText={text => {
              // cập nhật thay đổi thông tin
              setErrorPassWord(
                isValidPassword(text) == true
                  ? ''
                  : 'Password must be at least 3 char',
              );
              setPassWord(text);
            }}
            style={{
              color: 'black',
              // borderBottomWidth:1
            }}
            placeholder="Enter your password"
            placeholderTextColor={'rgba(0,0,0,0.6)'}
            secureTextEntry={true} //tính bảo mật ****
            value={'hhhh'}
            // value={password}
          />
          <View style={styles.ViewPassword} />
          <Text style={styles.ErrorText}>{errorPassword}</Text>
        </View>
      </View>

      {keyboardIsShow == false ? (
        <View //nếu bàn phím ko hiện thì nút Login hiện
          style={{
            flex: 20,
          }}>
          <TouchableOpacity
            onPress={() =>
               navigation.navigate('HomeMain')
              }
            style={styles.TouchLogin}>
            <Text style={styles.TextLogin}>Đăng nhập</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View></View>
      )}

      {keyboardIsShow == false ? (
        <View
          style={{
            flex: 15,
          }}>
          <View
            style={{
              // căn dòng kẻ đèn chữ
              flexDirection: 'row',
              alignItems: 'center',
              marginHorizontal: 20,
            }}>
            <View
              style={{
                flex: 1,
                height: 1,
                backgroundColor: 'black',
              }}
            />
            <Text style={styles.TextDown}>Use other methods?</Text>
            <View
              style={{
                flex: 1,
                height: 1,
                backgroundColor: 'black',
              }}
            />
          </View>
        </View>
      ) : (
        <View style={{flex: 15}}></View>
      )}
    </KeyboardAvoidingView>
  );
}
export default Login;
const {width, height} = Dimensions.get('window')
const styles = StyleSheet.create({
  ViewBackground: {
    flex: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor:colors.Orgent,
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30
  },
  TextBackground:{
    fontSize:30,
    color:'blue',

  },
  Image: {
    height: 150,
    width: 150,
    fontWeight: 'bold',
    // backgroundColor: 'blue',
    alignSelf: 'center',
  },
  TouchLogin: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.bluesky,
    alignSelf: 'center',
    width: '60%',
    height: 45,
    borderRadius: 20, // bo bán kính
  },
  TextLogin: {
    padding: 7,
    fontSize: fontSize.h2,
    color: colors.white,
  },

  TextDown: {
    padding: 8,
    fontSize: fontSize.h5,
    color: 'black',
    alignSelf: 'center',
    marginHorizontal: 5,
  },
  ViewPassword: {
    height: 1,
    backgroundColor: 'black',
    width: '100%',
    marginBottom: 5,
    marginHorizontal: 15,
    alignSelf: 'center',
  },
  ViewEmail: {
    //tạo dòng gạch chân
    height: 1,
    backgroundColor: 'black',
    width: '100%',
    marginBottom: 5,
    marginHorizontal: 15,
    alignSelf: 'center',
  },
  ErrorText: {
    color: 'red',
    marginBottom: 15,
  },
});
