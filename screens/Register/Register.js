import {
  View,
  Text,
  StyleSheet,
  Alert,
  Dimensions,
  TouchableOpacity,
  Image,
  TextInput,
  Button,
} from 'react-native';
import React, {useState, useEffect} from 'react';
const screenWidth = Dimensions.get('screen').width;
import AsyncStorage from '@react-native-async-storage/async-storage';
import {fontSize, images} from '../../constaints';
import {colors} from '../../constaints/colors';

export default function Register({navigation, route}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rePwd, setRePwd] = useState('');
  const [errorContent, setErrorContent] = useState('');

  const pressBack = () => {
    navigation.navigate('Login');
  };

  const pressAddNewAccount = () => {
    if (username.length < 6 && password.length < 6) {
      setErrorContent('Tài khoản hoặc mật khẩu phải lớn hơn 6 kí tự');
    } else if (password !== rePwd) {
      setErrorContent('Mật khẩu không đúng');
    } else {
      setErrorContent('');
      const newAccount = {
        username,
        password,
      };
      AsyncStorage.getItem('account').then(accounts => {
        const listAccount = JSON.parse(accounts);
        console.log('' + JSON.stringify(listAccount));
        if (
          Array.isArray(listAccount) &&
          listAccount.some(account => account.username === username)
        ) {
          setErrorContent(`${username} already exists`);
          return;
        }
        if (accounts === null) {
          AsyncStorage.setItem('account', JSON.stringify([newAccount]));
        } else {
          listAccount.push(newAccount);
          AsyncStorage.setItem('account', JSON.stringify(listAccount));
        }
        Alert.alert('Đăng ký thành công', 'Mời bạn đăng nhập', [
          {
            text: 'Hoàn thành',
            onPress: pressBack,
            // console.log();
          },
        ]);
      });
    }
  };
  return (
    <View style={styles.container}>
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

      <View style={styles.body}>
        {/* <Text style={styles.textSignIn}>Đăng ký</Text> */}
        <Text style={styles.titleName}>Tài khoản</Text>
        <TextInput
          placeholder={'Tài khoản'}
          onChangeText={setUsername}
          style={styles.styleMB20}
        />
        <View style={{borderWidth: 0.2, marginBottom: 10}} />
        <Text style={styles.titleName}>Mật khẩu</Text>
        <TextInput
          secureTextEntry={true}
          onChangeText={setPassword}
          placeholder={'Mật khẩu'}
          style={styles.styleMB20}
        />
        <View style={{borderWidth: 0.2, marginBottom: 10}} />
        <Text style={styles.titleName}>Xác định mật khẩu</Text>
        <TextInput
          secureTextEntry={true}
          onChangeText={setRePwd}
          placeholder={'Xác định mật khẩu'}
          style={styles.styleMB30}
        />
        <View style={{borderWidth: 0.2, marginBottom: 10}} />
        {Boolean(errorContent) && (
          <Text style={styles.textErr}>{errorContent}</Text>
        )}
        <TouchableOpacity
          style={styles.buttonRegister}
          onPress={pressAddNewAccount}>
          <Text style={styles.textRegister}>Đăng ký</Text>
        </TouchableOpacity>
        <Text style={styles.TextDki} onPress={() => navigation.goBack()}>
          Trở lại
        </Text>
      </View>
      <View style={{height:200}}/>
    </View>
  );
}
const styles = StyleSheet.create({
  textErr: {
    color: 'red',
    marginBottom: 30,
  },
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
    height: 250,
  },
  TextTitle: {
    fontSize: 30,
    color: 'blue',
    paddingLeft: 15,
    fontWeight: '700',
  },
  Image: {
    height: 150,
    width: 150,
    fontWeight: 'bold',
    // backgroundColor: 'blue',
    alignSelf: 'center',
    marginRight: 15,
  },
  titleName: {
    color: 'blue',
    fontSize: fontSize.h4,
    fontWeight: '600',
  },
  styleMB30: {
    // marginBottom: 30,
    paddingLeft: 10,
    marginBottom: -10,
  },
  styleMB20: {
    // marginBottom: 20,
    paddingLeft: 10,
    marginBottom: -10,
  },
  body: {
    marginLeft: 10,
    marginTop: -5,
  },
  textSignIn: {
    fontWeight: '700',
    fontSize: 24,
    marginBottom: 10,
    color: 'black',
    alignSelf: 'center',
  },
  forgotWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 20,
  },
  buttonRegister: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    width: '80%',
    backgroundColor: colors.bluesky,
    justifyContent: 'center',
    borderRadius: 10,
    marginLeft: 30,
    marginTop: 20,
  },
  textRegister: {
    fontSize: 15,
    color: colors.white,
  },
  TextDki: {
    alignSelf: 'center',
    fontSize: 15,
    color: colors.silver,
    paddingLeft: -40,
    paddingTop: 10,
    borderBottomWidth: 1,
  },
});
