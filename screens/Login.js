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
  ActivityIndicator,
} from 'react-native';

import {images, icons, fontSize} from '../constaints';
import {colors} from '../constaints/colors';
// import ContextProvider from '../navigation/Context/ContextProvider';
import {isValidEmail, isValidPassword} from '../utilies/validations';
import HomeMain from './Home/HomeMain';
import axios from 'axios';
import {connect} from 'react-redux';
import {sub} from 'react-native-reanimated';
import {login} from '../redux/actions/authActions';

function Login({navigation, login, loginedEmail, state}) {
  //state
  const [errorUsername, setErrorUserName] = useState('');
  const [errorPassword, setErrorPassWord] = useState('');
  //state email/pass
  const [username, setUsername] = useState('');
  const [password, setPassWord] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const [keyboardIsShow, setKeyboardIsShow] = useState(false);
  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardIsShow(true);
    });
    Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardIsShow(false);
    });
  }, []);
  const UserNameHandler = text => {
    setErrorUserName(isValidEmail(text) == true ? '' : 'Tài khoản không đúng');
    setUsername(text);
  };
  const PasWordHandler = text => {
    // cập nhật thay đổi thông tin
    setErrorPassWord(
      isValidPassword(text) == true ? '' : 'Mật khẩu phải trên 3 kí tự',
    );
    setPassWord(text);
  };

  //call api
  const getData = async () => {
    axios({
      url: 'https://63a55fab2a73744b008c2b33.mockapi.io/product',
      timeout: 10000,
      method: 'GET',
      data: {
        username: username,
        password: password,
      },
      contentType: ' application/json; charset=utf-8',
    })
      .then(result => {
        const currentUser = result.data;
        console.log(result.data);

        // navigation.navigate('HomeMain')
      })
      .catch(error => {});
  };

  const submit = async () => {
    // const {username,password} = state
    try {
      setIsLoading({...state, isLoading: true});
      await login(username, password); //trờ kq của login

      if (loginedEmail) {
        setIsLoading({...state, isLoading: false});
        navigation.navigate('HomeMain');
        console.log(state);
        return;
      }
      setIsLoading({
        ...state,
        isLoading: false,
        error: ' sai username or password',
      });
    } catch (error) {
      setIsLoading({...state, isLoading: false, error: 'Error '});
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{
        flex: 100,
        // flexDirection:'row',
        backgroundColor: 'white',
      }}>
      <View style={styles.ViewBackground}>
        <View style={{flexDirection: 'column'}}>
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
            value={username}
          />
          <View style={styles.ViewEmail} />
          {<Text style={styles.ErrorText}>{errorUsername}</Text>}
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
            flex: 25,
            // marginTop:35
          }}>
          {isLoading ? (
            <ActivityIndicator size="large" color=" blue" />
          ) : (
            <>
              <TouchableOpacity
                onPress={submit}
                // onPress={submit}
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
            </>
          )}
        </View>
      ) : (
        <View></View>
      )}
    </KeyboardAvoidingView>
  );
}

//rfcredux
const mapStateToProps = state => ({
  loginedEmail: state.auths.loginedEmail,
});

const mapDispatchToProps = dispatch => ({
  login: async (username, password) => dispatch(login(username, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

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

  TextTitle: {
    fontSize: 30,
    color: 'blue',
    paddingLeft: 15,
    fontWeight: 'bold',
  },
  Image: {
    height: 150,
    width: 150,
    fontWeight: 'bold',
    // backgroundColor: 'blue',
    alignSelf: 'center',
    marginRight: 15,
  },
  // linearGradient: {
  //   flex: 1,
  //   paddingLeft: 15,
  //   paddingRight: 15,
  //   borderRadius: 5
  // },
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
