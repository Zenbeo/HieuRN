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

import {Colors} from 'react-native/Libraries/NewAppScreen';
import { UIHearder } from '../Button';
import {images, icons, fontSize} from '../constaints';
import UITap from '../navigation/UITap';
import {isValidEmail, isValidPassword} from '../utilies/validations';

function Login(props) {
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
//navigation
const {navigation, rount}=props
//function of navigate to/back
const {navigate,goBack }=navigation

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{
        flex: 100,
        // flexDirection:'row',
        backgroundColor: 'white',
      }}>
      {/* <View
      style={{
       //flex :100
        // flexDirection:'column',
        // justifyContent:'center',
      }}> */}
      <View
        style={{
          flex: 40,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: fontSize.h0,
            fontWeight: 'bold',
            width: '50%',
          }}>
          Already have an Account?
        </Text>
        <Image
          tintColor="blue" //màu icons
          source={images.computers}
          style={{
            height: 120,
            width: 120,
            fontWeight: 'bold',
            // backgroundColor: 'blue',
            alignSelf: 'center',
          }}
        />
      </View>
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
              // cập nhật thay đổi thông tin
              // if(isValidEmail(text)==false){
              //     setErrorEmail('Email not in corect format')

              // }else setErrorEmail(''):
              setErrorEmail(
                isValidEmail(text) == true ? '' : 'Email not in corect format',
              );
              setEmail(text);
            }}
            style={{
              color: 'black',
              //borderBottomWidth:1
            }}
            placeholder="example@gmail.com"
            placeholderTextColor={'rgba(0,0,0,0.6)'}
            value={'hieu@gmail.com'}
          />
          <View
            style={{
              //tạo dòng gạch chân
              height: 1,
              backgroundColor: 'black',
              width: '100%',
              marginBottom: 5,
              marginHorizontal: 15,
              alignSelf: 'center',
            }}
          />
          <Text style={{color: 'red', marginBottom: 15}}>{errorEmail}</Text>
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
            value={'12345677'}
          />
          <View
            style={{
              height: 1,
              backgroundColor: 'black',
              width: '100%',
              marginBottom: 5,
              marginHorizontal: 15,
              alignSelf: 'center',
            }}
          />
          <Text style={{color: 'red', marginBottom: 15}}>{errorPassword}</Text>
        </View>
      </View>

      {keyboardIsShow == false ? (
        <View //nếu bàn phím ko hiện thì nút Login hiện
          style={{
            flex: 15,
          }}>
          <TouchableOpacity
            onPress={() => {
              //alert('Email=${email},PassWord =${passWord}');
              navigate(UITap)
              
            }}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#0066FF',
              alignSelf: 'center',
              width: '60%',
              borderRadius: 20, // bo bán kính
            }}>
            <Text
              style={{
                padding: 7,
                fontSize: fontSize.h4,
              }}>
              Login{' '}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              alert('Hello');
            }}
            style={{
              padding: 5,
              //  justifyContent: 'center',
              // alignItems: 'center',
              //flexDirection: 'row',
            }}>
            <Text
              style={{
                padding: 15,
                fontSize: fontSize.h5,
                color: 'black',
                alignSelf: 'center',
              }}>
              New user? Register now{' '}
            </Text>
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
            <Text
              style={{
                // width: 160,
                // textAlign: 'center',
                padding: 8,
                fontSize: fontSize.h5,
                color: 'black',
                alignSelf: 'center',
                marginHorizontal: 5,
              }}>
              Use other methods?
            </Text>
            <View
              style={{
                flex: 1,
                height: 1,
                backgroundColor: 'black',
              }}
            />
          </View>
          {/* <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              // alignItems: 'center',
              // padding: 15,
            }}>
            <Image
              style={{
                width: 50,
                height: 50,
                marginRight: 15,
              }}
              source={icons.facebook}
            />
            <Image
              style={{
                width: 50,
                height: 50,
              }}
              source={icons.gmail}
            />
            {/* <Icon name="facebook" size={35} color={Colors.facebook} />
           <Icons name="gamil" size={35} color={Colors.gmail} /> */}
          </View> 
        // </View>
      ) : (
        <View style={{flex: 15}}></View>
      )} 
    </KeyboardAvoidingView>
  );
}
export default Login;
