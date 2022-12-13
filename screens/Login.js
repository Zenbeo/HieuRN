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
  Dimensions,
} from 'react-native';

import {images, icons, fontSize} from '../constaints';
import {colors} from '../constaints/colors';
// import ContextProvider from '../navigation/Context/ContextProvider';
import UITap from '../navigation/UITap';
import {isValidEmail, isValidPassword} from '../utilies/validations';
import HomeMain from './Home/HomeMain';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as yup from 'yup';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

// const schema = yup.object().shape({
//   name: yup.string().required(),
//   password: yup.string().required().min(6, 'it nhat 6 ki tu'),
// });
// interface IFormInputs {
//   name: string;
//   password: string;
// }

function Login({navigation}) {
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
const UserNameHandler=text => {
  setErrorEmail(
    isValidEmail(text) == true ? '' : 'Tài khoản không đúng',
  );
  setEmail(text);
}
const PasWordHandler=text => {
  // cập nhật thay đổi thông tin
  setErrorPassWord(
    isValidPassword(text) == true
      ? ''
      : 'Mật khẩu phải trên 3 kí tự',
  );
  setPassWord(text);
}
  // const user = useContext(ContextProvider);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{
        flex: 100,
        // flexDirection:'row',
        backgroundColor: 'white',
      }}>
      <View style={styles.ViewBackground}>
        {/* <Text style={styles.TextBackground}>ĐẶT ĐỒ UỐNG </Text> */}
        <Image
          tintColor="blue" //màu icons
          source={images.computers}
          style={styles.Image}
        />
      </View>
      <View style={{margin: 20}} />
      <View
        style={{
          flex: 30,
        }}>
        <View
          style={{
            marginHorizontal: 15,
          }}>
          <Text style={styles.titleName}>Tài khoản: </Text>
          <TextInput
            onChangeText={UserNameHandler}
            style={styles.userText}
            placeholder="Nhập tài khoản của bạn"
            placeholderTextColor={'rgba(0,0,0,0.6)'}
            // value={'hieu@gmail.com'}
            value={email}
            // ref='userText'
            // autoFocus={true}
            // onEndEditing={(text)=>{this.refs.passwordText.focus()}}//
          />
          <View style={styles.ViewEmail} />
          {<Text style={styles.ErrorText}>{errorEmail}</Text>}
        </View>
        <View
          style={{
            marginHorizontal: 15,
          }}>
          <Text style={styles.titleName}>Mật khẩu: </Text>
          <TextInput
            onChangeText={PasWordHandler}
            style={styles.passwordText}
            placeholder="Nhập mật khẩu của bạn "
            placeholderTextColor={'rgba(0,0,0,0.6)'}
            secureTextEntry={true} //tính bảo mật ****
            // value={'hhhh'}
            value={password}
            // ref='passwordText'
          />
          <View style={styles.ViewPassword} />
          {<Text style={styles.ErrorText}>{errorPassword}</Text>}
        </View>
      </View>

      {keyboardIsShow == false ? (
        <View //nếu bàn phím ko hiện thì nút Login hiện
          style={{
            flex: 20,
            // marginTop:35
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('HomeMain')}
            style={styles.TouchLogin}>
            <Text style={styles.TextLogin}>Đăng nhập</Text>
          </TouchableOpacity>
          <View style={styles.ViewDki}>
            <Text
              style={styles.TextDki}
              onPress={() => navigation.navigate('Register')}>
              Đăng kí
            </Text>
            <View style={{borderWidth: 0.2, width: 80}} />
          </View>
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
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  ViewBackground: {
    flex: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: colors.Orgent,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  TextBackground: {
    fontSize: 30,
    color: 'blue',
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
  userText: {
    color: 'black',
  },
  passwordText: {
    color: 'black',
  },
  titleName: {
    color: 'blue',
    fontSize: fontSize.h4,
    fontWeight: 'bold',
  },
  ViewDki: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  TextDki: {
    fontSize: 18,
    color: 'black',
  },
});
