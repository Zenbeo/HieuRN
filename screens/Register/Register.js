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
  Alert,
} from 'react-native';
import {fontSize, images} from '../../constaints';
import {colors} from '../../constaints/colors';

import {isValidEmail, isValidPassword} from '../../utilies/validations';

export default function Register({navigation}) {
  //state
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassWord] = useState('');
  const [errorCheckPassword, setCheckErrorPassWord] = useState('');
  //state email/pass
  const [email, setEmail] = useState('');
  const [password, setPassWord] = useState('');
  const [checkPassword, setCheckPassWord] = useState('');

  const [keyboardIsShow, setKeyboardIsShow] = useState(false);
  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardIsShow(true);
    });
    Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardIsShow(false);
    });
  });
  const UserNameHandler = text => {
    setErrorEmail(isValidEmail(text) == true ? '' : 'Tài khoản không đúng');
    setEmail(text);
  };
  const PassWordHandler = text => {
    // cập nhật thay đổi thông tin
    setErrorPassWord(
      isValidPassword(text) == true ? '' : 'Mật khẩu phải trên 3 kí tự',
    );
    setPassWord(text);
  };
  const CheckPassWordHandler = text => {
    // cập nhật thay đổi thông tin
    setCheckErrorPassWord(
      isValidPassword(text) == true ? '' : 'Mật khẩu phải trên 3 kí tự',
    );
    setCheckPassWord(text);
  };
  // const user = useContext(ContextProvider);
  const NotifineHandler = () =>
    Alert.alert('Bạn đăng kí thành công ', 'Mời bạn đăng nhập', [
      {text: 'OK', onPress: () => navigation.navigate('Login')},
    ]);
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
      <View style={{margin: 10}} />
      <View
        style={{
          flex: 25,
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
            onChangeText={PassWordHandler}
            style={styles.passwordText}
            placeholder="Nhập mật khẩu của bạn "
            placeholderTextColor={'rgba(0,0,0,0.6)'}
            secureTextEntry={true} //tính bảo mật ****
            // value={'hhhh'}
            value={password}
          />
          <View style={styles.ViewPassword} />
          {<Text style={styles.ErrorText}>{errorPassword}</Text>}
        </View>
        <View
          style={{
            marginHorizontal: 15,
          }}>
          <Text style={styles.titleName}>Xác nhận mật khẩu: </Text>
          <TextInput
            onChangeText={CheckPassWordHandler}
            style={styles.passwordText}
            placeholder="Nhập mật khẩu của bạn "
            placeholderTextColor={'rgba(0,0,0,0.6)'}
            secureTextEntry={true} //tính bảo mật ****
            // value={'hhhh'}
            value={checkPassword}
          />
          <View style={styles.ViewPassword} />
          {<Text style={styles.ErrorText}>{errorCheckPassword}</Text>}
        </View>
      </View>

      {keyboardIsShow == false ? (
        <View //nếu bàn phím ko hiện thì nút Login hiện
          style={{
            flex: 15,
          }}>
          <TouchableOpacity onPress={NotifineHandler} style={styles.TouchLogin}>
            <Text style={styles.TextLogin}>Đăng ký</Text>
          </TouchableOpacity>
          <View style={styles.ViewDki}>
            <Text
              style={styles.TextDki}
              onPress={() => navigation.goBack('Login')}>
              Trở lại
            </Text>
            <View style={{borderWidth: 0.2, width: 60}} />
          </View>
        </View>
      ) : (
        <View></View>
      )}
    </KeyboardAvoidingView>
  );
}
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  ViewBackground: {
    flex: 13,
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
    marginHorizontal: 15,
    alignSelf: 'center',
  },
  ViewEmail: {
    //tạo dòng gạch chân
    height: 1,
    backgroundColor: 'black',
    width: '100%',
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
